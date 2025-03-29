<template>
  <vcc :initCodeEntity="codeInfoEntity" @updateCodeEntity="onCodeUpdate" @onLoadFinish="onLoadFinish"></vcc>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const initCodeStr = '{"template":{"lc_id":"root","__children":[{"div":{"class":"container","style":"min-height: 100%; padding-bottom: 100px;","lc_id":"container","__text__":"Welcome to the WDeisgn! Click to add components to start your low-code journey!","__children":[{"div": {"__text__": "{{showText}}", "lc_id": "text"}},{"el-button":{"lc-mark":"","type":"danger","lc_id":"COAAYXizyI","__children":[],"__text__":"{{showValue}}","@click":"hello","size":"small"}}]}}]}}'

export default {
  components: {
    vcc: defineAsyncComponent(() => import('./components-v2/VCC.vue')),
  },
  data() {
    return {
      codeInfoEntity: {
        codeStructure: JSON.parse(initCodeStr),
        JSCode: `
{
  data() {
    return {
      showValue: "Button",
      showText: "Text"
    };
  },
  methods: {
    hello() {
      alert("This is a pre-defined logic code");
    },
  },
}`
      },
    }
  },
  mounted() {
  },
  methods: {
    onCodeUpdate({ codeRawVueInfo, JSCode }) {
    },
    onLoadFinish(){

    }
  }
}
</script>
