<template>
  <div style="display:inline-block;">
    {{userInfo.username}} ({{userInfo.email}})
    <el-button size="small" @click="logout">退出登录</el-button>
  </div>
</template>

<script>
import services from "@/request";
const { fetchUserInfo } = services;
import { mapState } from 'vuex';
import { clearToken } from '../../request/request';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "LUser",
  data() {
    return {
      hasErrors,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    getUserInfo() {
      fetchUserInfo().then(res => {
        this.$store.commit('userInfo', res.data);
      })
    },
    logout() {
      clearToken();
      this.$router.replace({
        name: 'Login'
      })
    }
  }
};
</script>