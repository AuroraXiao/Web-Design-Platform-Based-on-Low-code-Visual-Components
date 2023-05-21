<template>
  <div style="diplay:flex;height:100%;">
    <div class="main-main">
      <nav class="base-component-container">
        <raw-components></raw-components>
      </nav>

      <div class="main-container">
        <!--顶部工具栏-->
        <tools-bar @onPreviewModeChange="onPreviewModeChange" @onEditModeChange="onEditModeChange" @redo="redo"
          @undo="undo" @structureVisible="structureVisible = true"></tools-bar>

        <div class="preview-container">
          <div id="render-control-panel">
            <!--这里不能放任何东西，执行时会被清空-->
          </div>
        </div>
        <attribute-input :enableRemoveButton="true" class="attribute" @save="onSaveAttr" @remove="onRemove"
          ref="attributeInput" shortcutInitMode="hand" :__rawVueInfo__="currentEditRawInfo">
        </attribute-input>
      </div>
    </div>

    <div class="copy">
      <div>
        <el-alert title="Need help ?" type="info">
          <el-link :underline="false" @click="help" style="font-size: 12px; margin-top: 5px;margin-bottom: 10px;" aria-label="Support">👉 Click to get help</el-link>
        </el-alert>
      </div>

      <el-tooltip effect="dark" content="Vue Editor" placement="top-start" aria-label="Vue Editor">
        <div class="round-icon icon-vue" alt="" @click="vueDialogVisible = true">Vue</div>
      </el-tooltip>
      <el-tooltip effect="dark" content="JS Editor" placement="top-start" aria-label="JS Editor">
        <div class="round-icon icon-js" alt="" @click="jsDialogVisible = true">JS</div>
      </el-tooltip>
      <el-tooltip effect="dark" content="Real-time Code" placement="top-start">
        <img class="round-icon" :src="iconCode" alt="" @click="codeDialogVisible = true">
      </el-tooltip>
      <el-popconfirm confirmButtonText="Yes" cancelButtonText="No"
        title="Are you sure to clear all contents ?" @confirm="clear">
        <template #reference>
          <img class="round-icon" :src="iconClear" alt="">
        </template>
      </el-popconfirm>
    </div>

    <div>
      <lc-code :rawCode="code" v-model:codeDialogVisible="codeDialogVisible">
      </lc-code>
      <code-structure @save="onSaveAttr" @remove="onRemove" ref="codeStructure" v-model="structureVisible"
        @reRender="render" :initStructure="codeRawVueInfo">
      </code-structure>
      <CodeEditor v-model:codeDialogVisible="jsDialogVisible" @saveJSCode="saveJSCode" ref="codeEditor"></CodeEditor>
      <VueEditor v-model:vueDialogVisible="vueDialogVisible" @codeParseSucess="codeParseSucess"></VueEditor>
    </div>

    <!-- 辅助定位线 -->
    <div class="cross-flag">
      <div class="x"></div>
    </div>
  </div>

  <div id="fullScreen" v-if="!editMode">
    <div style="margin: 20px; font-weight: bold; font-size:25px; font-weight: 700;color: #409EFF;text-align: center;">Click ESC to exit preview mode</div>
    <div id="mountedEle"></div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { splitInit } from "../libs/split-init";
// // 这个文件不可以进行懒加载，它会导致运行时不可点击的行为，具体原因未知
import { MainPanelProvider } from "../libs/main-panel";
import { initContainerForLine } from "@/utils/lineHelper";
import keymaster from "keymaster"

export default {
  name: "vcc",
  props: {
    initCodeEntity: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ['updateCodeEntity', 'onLoadFinish'],
  components: {
    RawComponents: defineAsyncComponent(() => import("@/components/RawComponents.vue")),
    ToolsBar: defineAsyncComponent(() => import("./ToolsBar")),
    AttributeInput: defineAsyncComponent(() => import("../components/AttributeInput")),
    CodeStructure: defineAsyncComponent(() => import("../components/CodeStructure")),
    "lc-code": defineAsyncComponent(() => import("../components/Code")),
    CodeEditor: defineAsyncComponent(() => import('../components/JSCodeEditorDialog.vue')),
    VueEditor: defineAsyncComponent(() => import('../components/VueCodeParseDialog.vue'))
  },
  data() {
    return {
      currentEditRawInfo: null,
      code: "",
      codeDialogVisible: false,
      structureVisible: false,
      jsDialogVisible: false,
      vueDialogVisible: false,
      iconCode: ("https://static.imonkey.xueersi.com/download/vcc-resource/icon/code-working-outline.svg"),
      iconClear: ("https://static.imonkey.xueersi.com/download/vcc-resource/icon/trash-outline.svg"),

      editMode: true,

      codeRawVueInfo: null,
      JSCode: ""
    };
  },
  watch: {
    currentEditRawInfo(newValue) {
      const attributeContainter = document.querySelector(".attribute");
      if (newValue) {
        attributeContainter.style = "right:10px; display:block;";
        this.$refs['attributeInput'].onShow();
      } else {
        attributeContainter.style = "right: calc(-300px - 20px); display:none;";
        this.$refs['attributeInput'].onHide();
      }
    },
    initCodeEntity(newVal) {
      if (newVal.JSCode) {
        this.mainPanelProvider.saveJSCodeOnly(this.convertLogicCode(newVal.JSCode));
      }

      if (newVal.codeStructure) {
        this.mainPanelProvider.render(newVal.codeStructure);
      }
    }
  },
  computed: {
  },
  beforeCreate() {
  },
  created() {
    this.mainPanelProvider = new MainPanelProvider();
  },
  beforeMount() { },
  mounted() {
    Promise.all([import("../map/load")])
      .then(res => {
        this.$emit("onLoadFinish");
        this.init();
      });
    splitInit();
    this.initShortcut();
  },
  beforeUpdate() { },
  updated() { },
  destroyed() { },
  methods: {
    convertLogicCode(JSCode) {
      try {
        const JSCodeInfo = eval(`(function(){return ${JSCode.replace(/\s+/g, "")}})()`);
        // 保留JS代码
        this.JSCode = JSCode;
        if (this.$refs.codeEditor) {
          this.$refs.codeEditor.updateLogicCode(JSCode);
        }
        return JSCodeInfo;
      } catch (e) {
        console.warn(`外部逻辑代码解析出错，解析的逻辑代码为: ${JSCode}, Error: ${e}`);
      }
    },

    initShortcut() {
      keymaster('⌘+z, ctrl+z', () => {
        this.undo();
        return false
      });


      keymaster('esc', () => {
        this.editMode = true;
        this.mainPanelProvider.setEditMode(true);
        return false
      });
    },

    init() {
      // 先订阅事件再渲染
      this.mainPanelProvider.onRootElementMounted(rootElement => {
        document.getElementsByTagName('body')[0].addEventListener("click", () => {
          this.mainPanelProvider.clearElementSelect();
        })

        // 只针对根div做事件监听
        initContainerForLine(rootElement.firstChild, this.currentPointer);

        document.querySelector(".x").style = "display:none;";

      }).onMerged(() => {
        this.currentPointer(null);
      }).onCodeCreated(code => {
        this.code = code;
      }).onCodeStructureUpdated(codeRawVueInfo => {
        if (this.$refs.codeStructure) {
          this.$refs.codeStructure.updateCode(codeRawVueInfo);
        }
        this.codeRawVueInfo = codeRawVueInfo;

        this.notifyParent();
      }).onNodeDeleted(() => {
        this.currentEditRawInfo = null;
      }).onSelectElement(rawInfo => {
        this.currentEditRawInfo = rawInfo;
      }).saveJSCodeOnly(this.convertLogicCode(this.initCodeEntity.JSCode ? this.initCodeEntity.JSCode : ''))
        .render(this.initCodeEntity.codeStructure ? this.initCodeEntity.codeStructure : this.getFakeData());
    },

    // 通知父Component
    notifyParent() {
      this.$emit('updateCodeEntity', {
        codeRawVueInfo: this.codeRawVueInfo,
        JSCode: this.JSCode
      });
    },

    // 指向将要插入哪个元素之前
    currentPointer(ele, index) {
      this.mainPanelProvider.setDropInfo({
        target: ele,
        index,
      });
    },

    /**获取一个模拟的实体对象 */
    getFakeData() {
      return {
        template: {
          lc_id: "root",
          __children: [{
            div: {
              class: "container",
              "lc_id": "container",
              "style": "min-height: 100%; padding-bottom: 100px;",
              __text__: "Welcome to the WDeisgn! Click to add components to start your low-code journey!",
            }
          }]
        },
      }

    },

    onPreviewModeChange(newValue) {
      const previewElem = document.querySelector("#render-control-panel");
      if (newValue) {
        previewElem.style = "width:375px;";
      } else {
        previewElem.style = "width:100%;";
      }
    },

    onEditModeChange(newValue) {
      this.editMode = newValue;

      this.$nextTick(() => {
        this.mainPanelProvider.setEditMode(newValue, document.querySelector("#mountedEle"));
      })
    },

    renderCode() {
      this.mainPanelProvider.reRender();
    },

    clear() {
      this.mainPanelProvider.render(this.getFakeData());
    },

    onSaveAttr({ resultList, lc_id }) {
      this.mainPanelProvider.saveAttribute(resultList, lc_id);
    },

    onRemove({ lc_id }) {
      this.mainPanelProvider.remove(lc_id);
    },

    redo() {
      this.mainPanelProvider.redo();
    },
    undo() {
      this.mainPanelProvider.undo();
    },

    saveJSCode({ JSCodeInfo: code, JSCode }) {
      this.mainPanelProvider.saveJSCode(code);
      // 保留JS代码
      this.JSCode = JSCode;
      this.notifyParent();
    },

    /**
     * 二级编辑解析
     */
    codeParseSucess(vueCodeEntity) {
      this.mainPanelProvider.render(vueCodeEntity);
    },

    /**
     * 渲染指定结构
     */
    render(codeEntity) {
      this.mainPanelProvider.render(codeEntity);
    },

    help() {
      window.open('/doc')
    }
  },
  fillter: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-main {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f0f0f0;
}

.base-component-container {
  border-radius: 0px;
  background-color: white;
}

.main-container {
  margin: 0px 0px 0 0;
  display: flex;
  max-height: 100vh;
  flex-direction: column;
}

.attribute {
  width: 300px;
  border-radius: 10px;
  margin-left: 10px;
  position: absolute;
  right: calc(-300px - 20px);
  top: 10px;
  background: white;
  max-height: calc(80% - 20px);
  transition: right 0.5s;
  overflow: scroll;
  z-index: 2;
}

#render-control-panel {
  height: 100%;
  width: 100%;
  border-radius: 0px;
  overflow: scroll;
  box-sizing: border-box;
  background-color: white;
  transition: width 1s;
  padding: 10px;
}

.preview-container {
  height: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
}

.copy {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  line-height: 0;
}

.round-icon {
  background: #409EFF;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 10px 0;
  margin-left: 10px;
  border: 0px;
  box-sizing: border-box;
}

.icon-js {
  line-height: 20px;
  color: white;
  text-align: center;
}

.icon-vue {
  line-height: 20px;
  color: white;
  text-align: center;
}

.cross-flag {
  position: fixed;
  right: 0;
  top: 0;
  .x {
    width: 20px;
    height: 2px;
    position: fixed;
    background-color: #409EFF;
    border-radius: 1px;
    top: 0;
    display: none;
    right: 0;
    pointer-events: none;
  }
  .y {
    width: 2px;
    height: 20px;
    position: fixed;
    background-color: #409EFF;
    top: 0;
    border-radius: 1px;
    display: none;
    right: 0;
    pointer-events: none;
  }
}

#fullScreen {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  background: white;
  overflow: scroll;
}

#mountedEle {
  border: 1px dashed rgb(126, 126, 128);
  border-radius: 10px;
  margin: 20px;
}
</style>

<!-- 以下的样式作用于渲染容器中-->
<style lang="scss">
#render-control-panel {
  position: relative;

  [div-lc-mark] {
    border: 1px grey dashed;
    min-height: 1rem;
    border-radius: 5px;
  }

  [lc_id] {
  }

  &::after {
    // content: "Editing area";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 40px;
    color:  rgb(217, 236, 255,0.2);
    // #d6d6d6
    pointer-events: none;
  }
}

.mark-element-unit {
  opacity: 0.5;
  outline: #79bbff 2px solid;
}
</style>

<style lang="scss">
.icon-s {
  font-size: 14px;
  color: #000;
  margin: 0 2px;
}

:root {
  --animate-duration: 1.5s;
}

.in-element {
  outline: 2px solid #409EFF !important;
  position: relative;
}

.mark-element {
  outline: 2px solid #409EFF !important;
  position: relative;
}

.mark-element::before {
  content: attr(lc-component-name) !important;
  background: #409EFF;
  color: white;
  left: 0 !important;
  top: 0 !important;
  transform: translateY(-100%);
  position: absolute;
  font-size: 12px;
  line-height: 12px;
  padding: 1px 2px;
  border-radius: 2px;
}

.light-mark {
  outline: 2px solid #409EFF;
  position: relative;
}

.light-mark::before {
  content: attr(lc-component-name) !important;
  background: #409EFF;
  color: white;
  left: 0 !important;
  top: 0 !important;
  position: absolute;
  font-size: 12px;
  line-height: 12px;
  padding: 1px 2px;
  border-radius: 2px;
}
</style>
