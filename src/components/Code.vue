<template>
  <el-dialog title="Code Preview" v-model="codeDialogVisible" width="70%" top="10vh" :before-close="handleClose" :center=true style="margin: auto">
    <!-- 这里加v-if是因为CodeEditor内部不支持watch数据监测 -->
    <CodeEditor v-if="codeDialogVisible" style="max-height: 55vh;" ref="codeEditor" :initCode="outputCode"
      mode="text/html"></CodeEditor>
    <div style="text-align:left;margin:20px;paddng:10px">
      <el-row>
        <el-col :span="4">
          Output Forms:
          <el-radio-group v-model="outputMode" style="display: flex; flex-direction: column;">
            <el-radio label="vue">Vue</el-radio>
            <el-radio label="html">Html</el-radio>
          </el-radio-group>
        </el-col>

        <el-col :span="7" v-if="outputMode === 'html'">
          Select Component Library:
          <el-checkbox-group v-model="checkList" style="display: flex; flex-direction: column;">
            <el-checkbox label="ele">Element UI</el-checkbox>
            <el-checkbox label="antd">Ant Design</el-checkbox>
            <el-checkbox label="vant">Vant</el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col :span="5" v-if="outputMode === 'html'">
          Select Vue Version:
          <el-radio-group v-model="vueVersion" style="display: flex; flex-direction: column;">
            <el-radio label="2">Vue 2</el-radio>
            <el-radio label="3">Vue 3</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="8" style="display: flex; flex-direction: column;"> Code access by:
          <div style="margin-top: 10px;">
            <el-tooltip effect="dark" content="Copy" placement="left">
              <img class="round-icon" :src="iconCopy" alt="" @click="copyCheck">
            </el-tooltip>
            <el-tooltip effect="dark" content="Download" placement="right">
              <img class="round-icon" :src="iconDownload" alt="" @click="download">
            </el-tooltip>
          </div>
          <div style="margin-top: 10px;" v-if="outputMode === 'html'">
            <el-input v-model="fileName" placeholder="Set filename" style="width: 150px; margin-right: 10px;" size="small">
            </el-input>
            <el-button size="small" type="primary" :loading="loading" @click="release">
              Set</el-button>
            <div v-if="accessUrl">Successful Deployment:<a :href="accessUrl" target="_blank">{{accessUrl}}</a></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider style="color: #666; font-size: 11px; text-align:center;">💡 Tips: Please ensure that Component library is integrated into your project before using the code</el-divider>
  </el-dialog>

</template>

<script>
import './prism.css'
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import copy from 'copy-to-clipboard';
import { saveAs } from "file-saver";

import CodeEditor from './CodeEditor.vue'
import singleIndexOutput from '../libs/singleIndexOutput.js';
import { createUniqueId } from '@/utils/common';

export default {
  props: ['rawCode', 'codeDialogVisible'],
  components: {
    CodeEditor
  },

  data() {
    return {
      // 在此自动生成
      outputMode: "vue",
      iconCopy: ("https://static.imonkey.xueersi.com/download/vcc-resource/icon/copy-outline.svg"),
      iconDownload: ("https://static.imonkey.xueersi.com/download/vcc-resource/icon/code-download-outline.svg"),
      loading: false,
      accessUrl: '',
      fileName: '',
      checkList: ['ele'],
      vueVersion: '3'
    };
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  destroyed() { },
  methods: {
    release() {
      this.loading = true;
      axios.post('https://apis.sahadev.tech/v1/file/upload', { "id": `index${this.fileName ? this.fileName : createUniqueId()}`, "content": this.singleIndex }).then(res => {
        this.accessUrl = res.data.data;
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.$message.error('发布失败，可能服务暂时不可用.');
      });
    },
    handleClose() {
      this.$emit("update:codeDialogVisible", false);
    },
    copyCheck() {
      this.copy();
    },
    copy() {
      if (copy(this.outputCode)) {
        this.$message.success("代码已复制到剪贴板");
      } else {
        this.$message.error("代码复制有点问题?");
      }
    },
    download() {
      let blob = new Blob([this.outputCode], {
        type: "text/plain;charset=utf-8",
      });

      if (this.isVueMode) {
        saveAs(blob, "VueComponent.vue");
      } else {
        saveAs(blob, "vcc.html");
      }
    },

  },
  watch: {
    codeDialogVisible(newValue) {
      if (newValue) {

      } else {

      }
    }
  },
  computed: {
    isVueMode() {
      return this.outputMode === 'vue';
    },
    outputCode() {
      return this.isVueMode ? this.prettyCode : this.singleIndex;
    },


    prettyCode() {
      try {
        return prettier.format(this.rawCode, {
          parser: "html",
          plugins: [parserHtml],
          vueIndentScriptAndStyle: true,
        });
      } catch (error) {
        return this.rawCode;
      }

    },

    singleIndex() {
      const htmlCode = singleIndexOutput(this.rawCode, this.checkList, this.vueVersion === '3');
      try {
        return prettier.format(htmlCode, {
          parser: "html",
          plugins: [parserHtml],
          vueIndentScriptAndStyle: true,
        });
      } catch (error) {
        return htmlCode;
      }
    }
  },
  fillter: {},
};
</script>

<style scoped>
/*  在此自动生成 */

:v-deep(.el-dialog__body) {
  padding: 0 30px !important;
}

.round-icon {
  background: #409EFF;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  margin-left: 10px;
  box-sizing: border-box;
}
.el-input{
  border-radius: 30px;
}
.el-button{
  border-radius: 10px;
}
</style>