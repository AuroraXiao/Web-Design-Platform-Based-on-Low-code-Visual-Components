<template>
  <el-dialog title="JS Editor" v-model="codeDialogVisible" width="70%" top="10vh" :before-close="handleClose" :center=true>
    <CodeEditor style="max-height: 65vh;" ref="codeEditor" :initCode="code" mode="text/javascript"></CodeEditor>

    <div style="padding: 10px; align-items: center;text-align:center;">
      <div>
        <el-button type="primary" @click="onSave">Submit</el-button>
        <div v-if="error" style="color: red; font-size:12px; margin-top:5px;">Please check for grammatical errors: {{error}}</div>
      </div>
      <!-- <div style="margin-left: 5px;">
        <el-link href="https://vcc.sahadev.tech/doc/#/improve/logic?id=%e9%80%bb%e8%be%91%e6%a8%a1%e6%9d%bf"
          target="_blank">
          <el-icon>
            <question-filled />
          </el-icon>
          帮助与说明
        </el-link>

      </div> -->
    </div>
    <el-divider content-position="left" style="color: #666; font-size: 12px; text-align:center;">💡 Tips: Read the instructions before you start.</el-divider>
  </el-dialog>

</template>

<script>
import dedent from 'dedent'
import CodeEditor from './CodeEditor.vue'

import prettier from "prettier/standalone";
import babel from "prettier/parser-babel";

const example = dedent`
  /**
   *  The methods in the following code will be imported into the final code, replacing the source code if the names are the same
   *  The internal integration of axios allows developers to initiate web requests directly through axios, although the interface needs to allow cross-domain.
   *  Cross-domain issues can be resolved by accessing the actual address in the following way: https://apis.sahadev.tech/exchange?url=
   *  axios Official Documents: https://www.npmjs.com/package/axios
   */
  {
      data() {
        return {

        };
      },
      watch: {

      },

      computed: {

      },

      methods: {
        request(){
          axios.get('https://apis.sahadev.tech/exchange?url=https://www.baidu.com').then(res => console.info(res), err => console.error(err));
        }
      },
  };
      `

export default {
  props: ['codeDialogVisible'],
  emits: ['saveJSCode', 'update:codeDialogVisible'],
  components: {
    CodeEditor
  },

  data() {
    return {
      error: '',
      code: example,
      example: `${example}`
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
    updateLogicCode(newCode) {
      if (newCode) {
        const pre = "const a = ";
        this.code = prettier.format(pre + newCode, {
          plugins: [babel],
        }).replace(pre, "");
      }
    },
    handleClose() {
      this.$emit("update:codeDialogVisible", false);
    },
    onSave() {
      const code = this.$refs.codeEditor.getEditorCode();
      // 去掉注释
      const temp = code.replace(/.+\*\/\s*/gs, "").replace(/\s+/g, "");
      try {
        // 转换为对象
        const JSCodeInfo = eval(`(function(){return ${temp}})()`);
        this.$emit("saveJSCode", {
          JSCodeInfo,
          JSCode: temp
        });
        this.handleClose();
        this.error = '';
      } catch (error) {
        console.warn(error);
        this.error = error;
      }
    }
  },
  watch: {
  },
  computed: {
  },
  fillter: {},
};
</script>

<style scoped>
/*  在此自动生成 */

:v-deep(.el-dialog__body) {
  padding: 0 30px !important;
}
</style>
