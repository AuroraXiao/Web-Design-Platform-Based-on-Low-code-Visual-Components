<template>
  <el-container class="container">
    <el-header>
      <div style="text-align:center;">
        <div class="welcome">Good to see you again</div>
        <div>
          <span style="font-size: 12px; color: #666">登录后可以：</span>
          <el-tag size="small" effect="dark">浏览模板广场</el-tag>
          <el-tag size="small" effect="dark" type="success">保存模板记录</el-tag>
          <el-tag size="small" effect="dark" type="danger">发布模板</el-tag>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="login-main">
            <a-form layout="vertical" @finish="onFinish" :model="formState" name="normal_login" class="login-form"
              @finishFailed="onFinishFailed">
              <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>

              <a-form-item style="text-align:center;">
                <a-button type="primary" html-type="submit" class="login-form-button" size="large">
                  Log in
                </a-button>
                <div>
                  <a @click="register" style="font-size:14px;">
                    Don't have an account?
                  </a>
                </div>
              </a-form-item>
            </a-form>
          </div>
        </el-col>
      </el-row>
    </el-main>

    <div class="brand">Low Code Generator</div>
  </el-container>
</template>

<script>
import services from "@/request";
const { login } = services;
import { setToken } from "@/request/request.js";
const md5 = require("md5");
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default {
  name: "LLogin",
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      formState: {
        username: '',
        password: '',
      }
    }
  },
  beforeCreate() {
    // this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    onFinish() {
      login({
        username: this.formState.username,
        password: md5(this.formState.password),
      }).then((res) => {
        if (res.data) {
          this.$message.success("登录成功，正在进入主页面~");
          setToken(res.data.access_token);
          setTimeout(() => {
            this.$router.replace({
              name: "ProjectList",
            });
          }, 1000);
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    onFinishFailed() { },

    register() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

.container {
  background-image: linear-gradient(to bottom, #fff9ec 0, #fff 90%);
  height: 100%;
}

.login-main {
  position: relative;
  width: 500px;
  box-shadow: 0 0px 20px 1px #e6e6e6;
  margin: 20px auto;
}

.login-form {
  border-radius: 5px;
  width: 100%;
  background-color: white;
  position: relative;
  padding: 1.7rem;
  z-index: 2;
}

.login-main:after {
  content: "";
  width: 70px;
  height: 60px;
  position: absolute;
  background-image: url("../../assets/icon/login-after.svg");
  left: -145px;
  bottom: 40px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.login-main:before {
  content: "";
  width: 240px;
  height: 160px;
  position: absolute;
  background-image: url("../../assets/icon/login-before.svg");
  right: -100px;
  top: -30px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.welcome {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1em;
  color: rgb(62, 67, 72);
  margin: 80px 0 10px;
  font-family: "Montserrat";
}

::v-deep .el-header {
  height: initial !important;
}

.login-form-button {
  width: 60%;
  margin: 30px auto 10px;
  font-weight: 900;
  font-size: 17px;
  border-radius: 24px;
}

.title {
  font-size: 14px;
  color: rgb(124, 125, 128);
}
</style>
