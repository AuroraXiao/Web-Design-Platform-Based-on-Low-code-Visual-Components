  <template lc_id="03KSNQZ/MV">
      <div lc_id="JoW6e9bEi+">
          <div lc_id="VGGG5BzJK+">
              <div class="demonstration-element" lc_id="LgRs8iauTY">Inline Form</div>
              <el-form inline lc-mark :model="formInline" class="demo-form-inline" lc_id="1WJLzNIqg/">
                  <el-form-item label="Approved by" lc-mark lc_id="9iLdD7vRhd">
                      <el-input v-model="formInline.user" placeholder="Approved by" lc_id="2N8NbmX1qy"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone" lc-mark lc_id="cuShpTy+7P">
                      <el-select v-model="formInline.region" placeholder="Activity zone" lc_id="fblnBhXD33">
                          <el-option label="Zone One" value="shanghai" lc_id="xEcFlTO5pD"></el-option>
                          <el-option label="Zone Two" value="beijing" lc_id="PjVhPT7HZa"></el-option>
                      </el-select>
                  </el-form-item>
              </el-form>
          </div>
          <div lc_id="tY5UywhfnK">
              <div class="demonstration-element" lc_id="Efto0Pndua">Basic Form</div>
              <span lc-mark lc_id="hqHTBq8YqG">
                  <span lc_id="EF8c2VPZRA">Key:</span>
                  <span lc_id="lWbqzj2kHH">Value</span>
              </span>
              <br lc_id="uPwRnvbcPK"/>              <span lc-mark lc_id="cjIUIdSSsS">
                  <b lc_id="ADps8bfr5O">Key:</b>
                  <span lc_id="beSG8unZWU">Value</span>
              </span>
              <br lc_id="xGgkS3JT4j"/>              <span lc-mark lc_id="y29nZqQNoJ">
                  <b lc_id="N9wWIaXqzx">Key:</b>
                  <div label-lc-mark lc_id="/ZBycQe5p/"></div>
              </span>
          </div>
          <div lc_id="PzuXdsu6kd">
              <div class="demonstration-element" lc_id="LdGjb6Df9M">Container Form</div>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" lc-mark label-width="100px" class="demo-border" lc_id="Zzz06+mzkO"></el-form>
          </div>
          <div lc_id="8ZewsTbRuD">
              <div class="demonstration-element" lc_id="cX5zh7f+RV">Validation Form</div>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" lc-mark label-width="100px" class="demo-border" lc_id="gx5EBJU9WS">
                  <el-form-item label="Activity name" prop="name" lc-mark lc_id="6md1kDs8qa">
                      <el-input v-model="ruleForm.name" lc_id="QG5eYYTCSB"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone" prop="region" lc-mark lc_id="tnJTgI76Kp">
                      <el-select v-model="ruleForm.region" placeholder="Activity zone" lc_id="nrTlsTbxPM">
                          <el-option label="Zone One" value="shanghai" lc_id="mXsEEs0/z0"></el-option>
                          <el-option label="Zone Two" value="beijing" lc_id="2GzfZP1Cbx"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Activity Time" required lc-mark lc_id="fz4dTVUbEb">
                      <el-col :span="11" lc_id="mmEYR54uQF">
                          <el-form-item prop="date1" lc_id="QkTT/2WWLK">
                              <el-date-picker type="date" placeholder="Select Date" v-model="ruleForm.date1" style="width: 100%" lc_id="G3lxZTQsw5"></el-date-picker>
                          </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2" lc_id="R2NmSO2FCi">-</el-col>
                      <el-col :span="11" lc_id="eOACIzQ+Dq">
                          <el-form-item prop="date2" lc_id="Ub+QEqDUGN">
                              <el-time-picker placeholder="Select Time" v-model="ruleForm.date2" style="width: 100%" lc_id="+tkG6VmYdM"></el-time-picker>
                          </el-form-item>
                      </el-col>
                  </el-form-item>
                  <el-form-item label="Instant delivery" prop="delivery" lc-mark lc_id="Lz8oPy38nU">
                      <el-switch v-model="ruleForm.delivery" lc_id="COO1BlBrjF"></el-switch>
                  </el-form-item>
                  <el-form-item label="Basic Upload files" prop="delivery" lc-mark lc_id="eFNZ7B9jgX">
                      <el-button type="primary" size="small" lc_id="7ZjOmdz3Ur">
upload                          <i class="el-icon-upload el-icon--right" lc_id="IOumsfqV0c"></i>
                      </el-button>
                  </el-form-item>
                  <el-form-item label="Customize form-item" prop="delivery" lc-mark lc_id="g9ZQTRZogP">
                      <div class="demo-border" lc_id="bICnUogCxE"></div>
                  </el-form-item>
                  <el-form-item label="Activity type" prop="type" lc-mark lc_id="u5e4jMDa0Z">
                      <el-checkbox-group v-model="ruleForm.type" lc_id="4odzSgDoVc">
                          <el-checkbox label="Online activities" name="type" lc_id="qRZK4l23q9"></el-checkbox>
                          <el-checkbox label="Promotion activities" name="type" lc_id="WbtFV7IdQ0"></el-checkbox>
                          <el-checkbox label="Offline activities" name="type" lc_id="/fBZC9Wz76"></el-checkbox>
                          <el-checkbox label="Simple brand exposure" name="type" lc_id="V+qui3Km7r"></el-checkbox>
                      </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources" prop="resource" lc-mark lc_id="EfEJRxIgMc">
                      <el-radio-group v-model="ruleForm.resource" lc_id="UaAE0hW4YD">
                          <el-radio label="Sponsorship" lc_id="eVUn2fPBO0"></el-radio>
                          <el-radio label="Venue" lc_id="OhNxMXrfFs"></el-radio>
                      </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Activity form" prop="desc" lc-mark lc_id="1J3SXxTQjA">
                      <el-input type="textarea" v-model="ruleForm.desc" lc_id="KndAAF/3Mu"></el-input>
                  </el-form-item>
                  <el-form-item lc_id="wSyCEJYjUD">
                      <el-button type="primary" @click="submitForm" lc_id="wp2oC1qxYN">Create</el-button>
                      <el-button @click="resetForm" lc_id="nWgxJ6a9v+">Reset</el-button>
                  </el-form-item>
              </el-form>
          </div>
          <div lc_id="dyK4shOTgK">
              <div class="demonstration-element" lc_id="OPhwbT6T5C">Basic Descriptions</div>
              <el-descriptions title="User Info" lc-mark lc_id="UcepzqrI8T">
                  <el-descriptions-item label="Username" lc-mark lc_id="61qM0Gdqq3">kooriookami</el-descriptions-item>
                  <el-descriptions-item label="Telephone" lc_id="p9NL7l0+yS">18100000000</el-descriptions-item>
                  <el-descriptions-item label="Place" lc_id="gA+SOSpqT1">Suzhou</el-descriptions-item>
                  <el-descriptions-item label="Remarks" lc_id="MpLSTs1V1a">
                      <el-tag size="small" lc_id="x+3JGPZLjM">School</el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="Address" lc_id="P7eacW7mxC">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
              </el-descriptions>
              <el-descriptions title="Border list" direction="vertical" :column="4" lc-mark lc_id="k4Y9MNzVZb">
>                  <el-descriptions-item label="Username" lc_id="YTqOj5iy95">kooriookami</el-descriptions-item>
                  <el-descriptions-item label="Telephone" lc_id="qx7ONklayE">18100000000</el-descriptions-item>
                  <el-descriptions-item label="Place" :span="2" lc_id="Gip/4MIafd">Suzhou</el-descriptions-item>
                  <el-descriptions-item label="Remarks" lc_id="4wYkIRcdbX">
                      <el-tag size="small" lc_id="9iHUBLDbHY">School</el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="Address" lc_id="zfJtvesctl">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
              </el-descriptions>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      radio1: 3,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动Name", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "Activity zone", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onReset() {
      console.log("submit!");
    },
    submitForm() {
      console.log("submit!");
    },
    resetForm() {
      console.log("submit!");
    },
  },
};  </script>
  <style scoped>.demo-border {
  border: 1px grey dashed;
  min-height: 1rem;
  border-radius: 5px;
}
[label-lc-mark] {
  display: inline-block;
  width: 200px;
  border: 1px grey dashed;
  min-height: 1rem;
  border-radius: 5px;
}</style>
