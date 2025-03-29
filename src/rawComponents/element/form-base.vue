  <template lc_id="6qRH3lc1dt">
      <div lc_id="nqlS2COw0N">
          <div lc_id="D9kF2S4UlD">
              <div class="demonstration-element" lc_id="DH8WXyx5Hd">Basic Radio</div>
              <el-radio-group v-model="radio" lc-mark lc_id="f0v5GqbM8W">
                  <el-radio :label="3" lc_id="iS/l/lS7uE">Option</el-radio>
                  <el-radio :label="6" lc_id="PwMXXlWapK">Option</el-radio>
                  <el-radio :label="9" lc-mark lc_id="kgp2vfR6ti">Option</el-radio>
              </el-radio-group>
          </div>
          <div lc_id="wwgDyr1OR2">
              <div class="demonstration-element" lc_id="6KW/uZOTEM">Basic Checkbox</div>
              <el-checkbox-group lc-mark v-model="checkList" lc_id="Uen92zl/6G">
                  <el-checkbox label="Option A" lc_id="FgCPjGEWNa"></el-checkbox>
                  <el-checkbox label="Option B" lc_id="FAGQbE5NjH"></el-checkbox>
                  <el-checkbox lc-mark label="Option C" lc_id="vp/RVl8A/3"></el-checkbox>
              </el-checkbox-group>
          </div>
          <div lc_id="VEDRtauvNm">
              <el-input v-model="input" placeholder="Please input" lc-mark lc_id="ffFxjUysQl"></el-input>
              <el-input type="textarea" lc-mark :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="textarea2" lc_id="l7XPAnIanl"></el-input>
          </div>
          <div lc_id="4JbZ+JNrQw">
              <div class="demonstration-element" lc_id="qBSKct8boj">Number Input</div>
              <div style="display:inline-block;width:200px;" lc-mark lc_id="xBXsSYROtm">
                  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="Details Information" lc_id="6UG1vTaWBN"></el-input-number>
              </div>
              <div style="display:inline-block;width:200px;" lc-mark lc_id="ma8NcOpTT7">
                  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10" lc_id="UBHeHrcbVw"></el-input-number>
              </div>
          </div>
          <div lc_id="cug4WVKxu9">
              <div class="demonstration-element" lc_id="BkPeGYgetZ">Basic Selection</div>
              <el-select v-model="value" lc-mark placeholder="Please select" lc_id="qB59tUf6Gc">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" lc_id="whLrgIdezr"></el-option>
              </el-select>
          </div>
          <div lc_id="nDNR0MoKZA">
              <div class="demonstration-element" lc_id="p4yqbL8QdC">Basic Cascader</div>
              <el-cascader lc-mark v-model="value2" :options="options2" @change="handleChange" lc_id="nMEiBnay+d"></el-cascader>
          </div>
          <div lc_id="H/A6J6KXiY">
              <div class="demonstration-element" lc_id="1ly5rIkWVS">Basic Switch</div>
              <el-switch lc-mark v-model="value3" active-text="On" inactive-text="Off" lc_id="xKdVt8uBzg"></el-switch>
          </div>
          <div lc_id="PnI1SUBtFH">
              <div class="demonstration-element" lc_id="xEukfWny/6">Basic Slider</div>
              <el-slider lc-mark v-model="value4" lc_id="6y/Uiwq0ZN"></el-slider>
          </div>
          <div lc_id="5dyMzD3j06">
              <div class="demonstration-element" lc_id="ERiurnsreT">Basic TimePicker</div>
              <el-time-select v-model="value5" lc-mark :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="Select Time" lc_id="Sz3vn5DAbX"></el-time-select>
              <el-time-picker lc-mark is-range v-model="value1" range-separator="To" start-placeholder="Start Time" end-placeholder="结束时间" placeholder="选择时间范围" lc_id="o2nM93CmIm"></el-time-picker>
          </div>
          <div lc_id="xWW1lIgrLe">
              <div class="demonstration-element" lc_id="Sm6zFTno79">Basic DatePicker</div>
              <el-date-picker v-model="value6" lc-mark type="date" placeholder="Select Date" lc_id="5S5Yzx2fXs"></el-date-picker>
              <el-date-picker v-model="dateValue1" lc-mark type="daterange" range-separator="To" start-placeholder="Start Date" end-placeholder="End Date" lc_id="3D+CY23B2Q"></el-date-picker>
          </div>
          <div lc_id="SFEe1Ua3f3">
              <div class="demonstration-element" lc_id="EDwU3s0SZ6">Basic Upload</div>
              <div lc_id="Cco/MVefy1">
                  <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple lc-mark :limit="3" :on-exceed="handleExceed" :file-list="fileList" lc_id="7frE/pSrYE">
                      <el-button size="small" type="primary" lc_id="c/5KHeT+LU">Upload</el-button>
                      <template #tip lc_id="cEzrM0eEXc">
                          <div class="el-upload__tip" lc_id="Vh2iLMvT2c">Only jpg/png files can be uploaded, and no more than 500kb</div>
                      </template>
                  </el-upload>
              </div>
              <div lc-mark style="max-width:400px;font-size:14px;" lc_id="NwHRrU2JEM">
Image list thumbnail:                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture" lc_id="+hJ7DSkPgT">
                      <el-button size="small" type="primary" lc_id="y3uZKsl9b/">Upload</el-button>
                      <template #tip lc_id="0JB5ZbGk3I">
                          <div class="el-upload__tip" lc_id="esyAhLLNGI">Only jpg/png files can be uploaded, and no more than 500kb</div>
                      </template>
                  </el-upload>
              </div>
              <div lc_id="g/E9ZNwP9E">
                  <el-upload class="upload-demo" lc-mark drag action="https://jsonplaceholder.typicode.com/posts/" multiple lc_id="ADzwW/1hsX">
                      <i class="el-icon-upload" lc_id="FsQAFizcWf"></i>
                      <div class="el-upload__text" lc_id="CCys4DMWDP">
Drag files here, or                          <em lc_id="TbbfPE9Hu+">Upload</em>
                      </div>
                      <template #tip lc_id="K65M529P0Z">
                          <div class="el-upload__tip" lc_id="4GA0T+3HDL">Only jpg/png files can be uploaded, and no more than 500kb</div>
                      </template>
                  </el-upload>
              </div>
          </div>
          <div lc_id="X/f9Q6XT+l">
              <div class="demonstration-element" lc_id="7NKyW9NxNM">Basic Rate</div>
              <el-rate v-model="value7" lc-mark show-text lc_id="gWm2+ckHWm"></el-rate>
          </div>
          <div lc_id="unZHE/lFYS">
              <div class="demonstration-element" lc_id="9gDxl8XOEm">Basic ColorPicker</div>
              <el-color-picker lc-mark v-model="color1" lc_id="V+9zRMsjFK"></el-color-picker>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      textarea2: "",
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      dateValue1: '',
      num: 1,
      imageUrl: '',
      color1: "#409EFF",
      checkList: ["选中且禁用", "Option A"],
      radio: 3,
      input: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      options: [
        {
          value: "Option 1",
          label: "Option 1",
        },
        {
          value: "Option 2",
          label: "Option 2",
        },
        {
          value: "Option 3",
          label: "Option 3",
        },
        {
          value: "Option 4",
          label: "Option 4",
        },
        {
          value: "Option 5",
          label: "Option 5",
        },
      ],
      value: 0,

      value2: [],
      options2: [
        {
          value: "Guide",
          label: "Guide",
          children: [
            {
              value: "Disciplines",
              label: "Disciplines",
              children: [
                {
                  value: "Consistency",
                  label: "Consistency",
                },
                {
                  value: "Feedback",
                  label: "Feedback",
                },
                {
                  value: "Efficiency",
                  label: "Efficiency",
                },
                {
                  value: "Controllability",
                  label: "Controllability",
                },
              ],
            },
            {
              value: "Navigation",
              label: "Navigation",
              children: [
                {
                  value: "Side Navigation",
                  label: "Side Navigation",
                },
                {
                  value: "Top Navigation",
                  label: "Top Navigation",
                },
              ],
            },
          ],
        },
        {
          value: "Component",
          label: "Component",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Basic Layout",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Demo Icon",
                },
                {
                  value: "button",
                  label: "Basic Button",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Basic Radio",
                },
                {
                  value: "checkbox",
                  label: "Basic Checkbox ",
                },
                {
                  value: "input",
                  label: "Basic Input",
                },
                {
                  value: "input-number",
                  label: "Number Input",
                },
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "cascader",
                  label: "Cascader",
                },
                {
                  value: "switch",
                  label: "Switch",
                },
                {
                  value: "slider",
                  label: "Slider",
                },
                {
                  value: "time-picker",
                  label: "TimePicker",
                },
                {
                  value: "date-picker",
                  label: "Basic DatePicker",
                },
                {
                  value: "datetime-picker",
                  label: "Basic DateTimePicker",
                },
                {
                  value: "upload",
                  label: "Basic Upload",
                },
                {
                  value: "rate",
                  label: "Basic Rate",
                },
                {
                  value: "form",
                  label: "Basic Form",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Basic table",
                },
                {
                  value: "tag",
                  label: "Basic Tag ",
                },
                {
                  value: "progress",
                  label: "Basic Progress",
                },
                {
                  value: "tree",
                  label: "Basic Tree",
                },
                {
                  value: "pagination",
                  label: "Basic Pagination",
                },
                {
                  value: "badge",
                  label: "Basic Badge",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert Notice",
                },
                {
                  value: "loading",
                  label: "Loading",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu Navigation Menu",
                },
                {
                  value: "tabs",
                  label: "Tabs TabPages",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb Navigation",
                },
                {
                  value: "dropdown",
                  label: "Dropdown Menu",
                },
                {
                  value: "steps",
                  label: "Step Bar",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog",
                },
                {
                  value: "tooltip",
                  label: "Basic Tooltip",
                },
                {
                  value: "popover",
                  label: "Popover Box",
                },
                {
                  value: "card",
                  label: "Basic Card",
                },
                {
                  value: "carousel",
                  label: "Basic Carousel",
                },
                {
                  value: "collapse",
                  label: "Basic Collapse",
                },
              ],
            },
          ],
        },
        {
          value: "Resource",
          label: "Resource",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "Design Documentation",
            },
          ],
        },
      ],
      value3: true,
      value4: 28,
      value5: "",
      value6: "",
      value7: 1,
    };
  },
  methods: {
    handleChange(value) { },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
    },

    next() { },
    goBack() {
      console.log("go back");
    },
  },
};  </script>
  <style scoped>.avatar-uploader :v-deep(.el-upload) {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}</style>
