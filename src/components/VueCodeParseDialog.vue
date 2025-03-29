<template>
  <el-dialog title="Vue Editor" v-model="vueDialogVisible" width="70%" top="10vh" :before-close="handleClose"
    :center=true>
    <CodeEditor style="max-height: 65vh;" ref="codeEditor" :initCode="code" mode="text/html"></CodeEditor>

    <div style="text-align:center;padding: 10px;">
      <el-button type="primary" @click="compile">Parse</el-button>
      <el-divider content-position="left" style="color: #666; font-size: 12px; text-align:center;">💡 Tips: The result will be shown after successful parsing.</el-divider>
      <div v-if="error" style="color: red; font-size:12px; margin-top:5px;">Please check for grammatical errors: {{error}}</div>
    </div>
  </el-dialog>

</template>

<script>
import dedent from 'dedent'
import CodeEditor from './CodeEditor.vue'
import { html2Json } from '../libs/bundle-html2json-esm';
import { ergodic, findAObject } from '../utils/common';

export default {
  props: ['vueDialogVisible'],
  emits: ['codeParseSucess', 'update:vueDialogVisible'],
  components: {
    CodeEditor
  },

  data() {
    return {
      error: '',
      code: dedent
      `
  /**
   *  Please paste the Vue code into this text box and click the "Parse" button.
   *  Only simple Vue files are support so far.
   *  If the code contains other Components, it will not be displayed properly, but editing is still supported.
   */
  `
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
    handleClose() {
      this.$emit("update:vueDialogVisible", false);
    },
    async compile() {
      try {
        const code = this.$refs.codeEditor.getEditorCode();
        // 去掉注释，注释的替换逻辑并不健壮，用的是贪心方式
        // const temp = code.replace(/.+\*\/\s*/gs, "");
        const temp = code;

        if (temp) {
          // 解析Vue
          const obj = await html2Json(temp);
          // 取出template结构
          const template = findAObject(obj.root.__children, 'template');

          if (template) {
            // 为每个节点增加lc_id
            ergodic(template);
            // 通知VCC渲染此结构
            this.$emit("codeParseSucess", template);
            this.handleClose();
          } else {
            this.error = 'Vue解析失败，请检查是不是完整的Vue结构';
          }
        } else {
          this.error = '请输入Vue代码';
        }
      } catch (error) {
        console.warn(error);
        this.error = error;
      }
    },
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
