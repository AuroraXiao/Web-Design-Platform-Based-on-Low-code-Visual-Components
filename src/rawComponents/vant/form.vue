  <template lc_id="YewM0Fpxez">
      <div lc_id="/u9MrfDUSF">
          <div lc_id="elcsTETZKP">
              <div class="demonstration-vant" lc_id="J+JyznaSGx">Basic Form</div>
              <van-form @submit="onSubmit6" lc-mark lc_id="Bb6KSvo7iV">
                  <van-field v-model="username" name="Username" label="Username" placeholder="Username" :rules="[{ required: true, message: '请填写用户名' }]" lc_id="cQHslSjUh0"></van-field>
                  <van-field v-model="password" type="password" name="Password" label="Password" placeholder="Password" :rules="[{ required: true, message: '请填写密码' }]" lc_id="Z62w8chtA6"></van-field>
                  <div style="margin: 16px" lc_id="FTIfo2F7fb">
                      <van-button round block plain native-type="submit" lc_id="OnpChGM4FG">Submit</van-button>
                  </div>
              </van-form>
          </div>
          <div lc_id="a6J+tHBXfx">
              <div class="demonstration-vant" lc_id="3UqmMJaGUs">Basic Picker</div>
              <van-picker title="Title" show-toolbar lc-mark :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" lc_id="FbUA+gwYwD"></van-picker>
          </div>
          <div lc_id="FqUz9WN+J4">
              <div class="demonstration-vant" lc_id="x10zfQk8GP">Basic Rate</div>
              <van-rate v-model="value" lc-mark lc_id="9Q2B165SWb"></van-rate>
              <van-rate v-model="value" lc-mark icon="like" void-icon="like-o" lc_id="o25A/Nsm+q"></van-rate>
              <van-rate v-model="value" :size="25" lc-mark color="#ffd21e" void-icon="star" void-color="#eee" lc_id="udpZtvnYaM"></van-rate>
          </div>
          <div lc_id="aYGRCZj0NF">
              <div class="demonstration-vant" lc_id="beXwEGxE8d">Basic Search</div>
              <div style="padding: 10px 0" lc_id="X0fmlZxEoc">
                  <van-search v-model="search" lc-mark placeholder="Please enter a keyword" lc_id="fiUNBFaJfb"></van-search>
              </div>
          </div>
          <div lc_id="xACj+8KsPj">
              <div class="demonstration-vant" lc_id="SZ2gOWJLtH">Slider</div>
              <div style="margin: 10px" lc_id="3tMNXghyqk">
                  <van-slider v-model="slideValue" @change="onChange" lc-mark lc_id="+KskhfWNet"></van-slider>
              </div>
          </div>
          <div lc_id="yx9fIH6YT1">
              <div class="demonstration-vant" lc_id="/DC9chV2f8">Basic Stepper</div>
              <van-stepper lc-mark v-model="stepValue" lc_id="dG2w3gK8iM"></van-stepper>
          </div>
          <div lc_id="bRF7t/PiSs">
              <div class="demonstration-vant" lc_id="p4NWwVwgEJ">Basic Switch</div>
              <van-switch v-model="checked" lc-mark lc_id="Puwkg/BZL3"></van-switch>
          </div>
          <div lc_id="FLUufSgaoY">
              <div class="demonstration-vant" lc_id="ljrW/4PCCr">Basic Uploader</div>
              <van-uploader :after-read="afterRead" lc-mark lc_id="vfLysz9Um7"></van-uploader>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      stepValue: 1,
      username: "",
      password: "",
      slideValue: 30,
      slideArrValue: [10, 60],
      search: "",
      show: false,
      columns: ["Hangzhou", "Ningbo", "Wenzhou", "Shaoxing", "Huzhou", "Jiaxing", "Jinhua", "Quzhou"],
      value: 3,
      checked: true,
    };
  },
  methods: {
    onSubmit6(values) {
      console.log("submit", values);
    },
    onConfirm(value, index) { },
    onChange(picker, value, index) { },
    onCancel() { },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};  </script>
  <style scoped></style>
