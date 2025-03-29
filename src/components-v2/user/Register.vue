<template>
  <div class="container">
    <div style="width: 600px; margin:0 auto;">

      <a-page-header title="注册一个LCG账号" @back="$router.back()">
      </a-page-header>

      <div class="login-main">
        <a-form class="login-form" layout="vertical" name="custom-validation" :model="formState" @finish="handleFinish"
          @validate="handleValidate" @finishFailed="handleFinishFailed">
          <a-form-item has-feedback label="nickname" name="nickname">
            <a-input v-model:value="formState.nickname" autocomplete="off" />
          </a-form-item>
          <a-form-item has-feedback label="Password" name="pass">
            <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
          </a-form-item>
          <!-- <a-form-item has-feedback label="Confirm" name="checkPass">
            <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
          </a-form-item> -->
          <a-form-item has-feedback label="email" name="email">
            <a-input v-model:value="formState.email" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
            <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="brand">Low Code Generator</div>
  </div>
</template>

<script>
import services from "@/request";
const { register } = services;
const md5 = require('md5');

export default {
  name: "LRegister",
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formState: {
        email: "",
        pass: "",
        checkPass: "",
        nickname: "",
      }
    };
  },
  beforeCreate() {
  },
  methods: {
    handleFinish() {  
      register({
        nickname: this.formState.nickname,
        password: md5(this.formState.pass),
        email: this.formState.email,
      }).then((res) => {
        if (res.data) {
          this.$message.success('账号注册成功，正在跳转至登录页面~');
          setTimeout(() => {
            this.$router.replace({
              name: 'Login'
            })
          }, 2000);
        } else {
          this.$message.error(res.msg);
        }
      })
    },
    handleFinishFailed() {
    },

    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>

<style scoped>
.container {
  background-image: linear-gradient(to bottom, #fff9ec 0, #fff 90%);
  min-height: 100%;
  padding: calc((100vh - 620px) / 2 * 0.4) 100px calc((100vh - 620px) / 2 * 0.6);
}

.welcome {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.1em;
  color: rgb(62, 67, 72);
  margin: 0px 20px 30px;
}

.login-main {
  position: relative;
  box-shadow: 0 0px 20px 1px #e6e6e6;
  margin: 20px auto;
  z-index: 1;
}

.login-form {
  border-radius: 5px;
  width: 100%;
  background-color: white;
  position: relative;
  padding: 1.7rem;
  z-index: 2;
}

.login-form-button {
  width: 60%;
  font-weight: 900;
  font-size: 17px;
  border-radius: 24px;
}
</style>