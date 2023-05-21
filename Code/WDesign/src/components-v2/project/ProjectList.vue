<template>
  <div>
    <a-page-header sub-title="拖拽式Vue组件代码生成平台" backIcon="false" style="border-bottom: 1px solid rgb(235, 237, 240)">
      <template v-slot:title>
        <span class="main-title">
          Low Code Generator
        </span>
      </template>
      <template v-slot:extra>
        <user></user>
      </template>
    </a-page-header>

    <el-tabs v-model="activeName" @tab-click="handleClick" type="card" style="padding: 20px;">
      <el-tab-pane label="我的模板" name="first">
        <my-project></my-project>
      </el-tab-pane>
      <el-tab-pane label="模板广场" name="second" lazy>
        <piazza></piazza>
      </el-tab-pane>
      <el-tab-pane label="我发布的" name="third" lazy>
        <my-release></my-release>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
import Piazza from './Piazza';
import MyRelease from './MyRelease';
import MyProject from './MyProject.vue';
import User from '../user/User.vue';

export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    Piazza,
    MyRelease,
    MyProject,
    User
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    handleClick(tab, event) {
    },
  }
};
</script>
<style scoped>
.main-title {
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  color: #4dba87;
  white-space: nowrap;
}
</style>