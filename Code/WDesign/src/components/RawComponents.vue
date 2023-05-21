<template lc_id="OpUzJauqXb">
  <div lc_id="wL/ZpJzwjh" class="container">

    <nav style="display:flex;">
      <div :index="index + ''" v-for="(item, index) in iconArray" @click="onSelectElement(index)" :key="item.icon"
        :class="{'active':currentIndex === index}" class="main-icon-container">
        <img v-if="item.enable" :src="item.icon" class="l-icon">
        <el-tooltip v-else class="item" effect="dark" content="Under development" placement="right">
          <img :src="item.icon" class="icon" style="width: 34px;height: 34px;">
        </el-tooltip>

      </div>

      <div class="bottom-toolbar">
        <div class="main-title">
          Low-Code WDeisgn
        </div>

        <div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-icon style="font-size:22px;color:#409EFF;"><question-filled /></el-icon>
            </span>
            <!-- <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Base Components Number: {{ componentUnitNum }}
                </el-dropdown-item>
                <el-dropdown-item command="lcg">Home</el-dropdown-item>
                <el-dropdown-item command="help">Instruction</el-dropdown-item>
              </el-dropdown-menu>
            </template> -->
          </el-dropdown>
        </div>
      </div>
    </nav>

    <nav v-if="currentSelectBrand.titleArray && currentSelectBrand.titleArray.length > 0">
      <div style="margin-bottom:10px;text-align:center;">
        <div style="padding:5px;font-size:12px;color:grey;">Search Components</div>
        <el-autocomplete class="inline-input" v-model="componentSearch" :fetch-suggestions="querySearch" size="small"
          placeholder="Search" @select="handleSelect"></el-autocomplete>
      </div>
      <div class="dismiss-scroll">
        <div v-for="(item, index) in currentSelectBrand.titleArray" :key="item.title" class="second-nav"
          :class="{'active':currentSelectBrand.selectIndex === index}" @click="selectSubnav(currentSelectBrand, index)">
          <div style="weight: 600; font-size: 16px;">{{item.titleChinese}}</div>
          <div style="font-size: 12px; color: grey;">{{item.titleEnglish}}</div>
        </div>
      </div>
    </nav>

    <div style="overflow:scroll;padding:0 10px;">
      <keep-alive>
        <component :is="currentSelectBrand.componentName" @mounted='onMouted(currentIndex)'></component>
      </keep-alive>
    </div>

  </div>
</template>
<script>
// import iview from "../rawComponents/iview";
// import quasar from "../rawComponents/quasar";
import raw from "../rawComponents/raw/index.vue";
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      activeName: "0",
      componentSearch: '',
      iconArray: [
      //   {
      //   // icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/html-n.png'),
      //   icon: ('src/assets/logo/html-n.png'),
      //   clickCallback: this.onSelectElement,
      //   className: "demonstration-raw",
      //   enable: true,
      //   componentName: 'raw',
      //   titleArray: [],
      // },
      {
        // icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/element-n.png'),
        icon: ('src/assets/logo/element-n.png'),
        clickCallback: this.onSelectElement,
        className: "demonstration-element",
        selectIndex: 0,
        componentName: 'ele',
        enable: true,
        titleArray: [],
      }, {
        // icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/vant-n.png'),
        icon: ('src/assets/logo/vant-n.png'),
        clickCallback: this.onSelectElement,
        className: "demonstration-vant",
        selectIndex: 0,
        componentName: 'vant',
        enable: true,
        titleArray: [],
        enable: true
      },
      // {
      //   icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/iview-n.png'),
      //   enable: false
      // }, {
      //   icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/quasar-n.png'),
      //   enable: false
      // },
      {
        icon: ('https://static.imonkey.xueersi.com/download/vcc-resource/logo/antd-n.svg'), // 组件库导航图标
        clickCallback: this.onSelectElement,
        className: "demonstration-antd",
        selectIndex: 0,
        componentName: 'antd',
        enable: true,
        titleArray: [],
      },],

      currentIndex: 0
    };
  },
  methods: {

    querySearch(queryString, cb) {
      const result = queryString ? this.currentSelectBrand.titleArray.filter(item => {
        return item.titleChinese.indexOf(queryString) >= 0 || (item.titleEnglish && item.titleEnglish.toLowerCase().indexOf(queryString.toLowerCase()) >= 0)
      }) : this.currentSelectBrand.titleArray;
      cb(result.map(item => {
        return {
          value: item.titleChinese + ' ' + item.titleEnglish,
          element: item.element
        }
      }));
    },

    scrollTo(item) {
      item.element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },

    handleSelect(item) {
      this.scrollTo(item);
    },

    // handleCommand(command) {
    //   if (command === 'help') {
    //     window.open('/doc')
    //   } else if (command === 'chat') {
    //     // window.open('https://gitter.im/low_code_generator/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link')
    //   } else if (command == 'lcg') {
    //     // window.open('https://lcg.sahadev.tech')
    //   }
    // },

    onSelectElement(index) {
      if (this.iconArray[index].enable) {
        this.currentIndex = index;
      }
    },

    onMouted(index) {
      this.initOnly(this.iconArray[index]);
    },

    selectSubnav(obj, index) {
      obj.selectIndex = index;
      this.scrollTo(obj.titleArray[index]);
    },

    init() {
      this.initOnly(this.iconArray[0]);
    },

    initOnly(mountedObject) {
      const titles = document.getElementsByClassName(mountedObject.className);

      if (titles.length > 1) {
        for (let i = 0; i < titles.length; i++) {
          const element = titles[i];
          const arr = element.textContent.split(' ');
          mountedObject.titleArray.push({
            titleChinese: arr.length === 2 ? arr[1] : arr[0],
            titleEnglish: arr.length === 1 ? null : arr[0],
            element: element
          })
        }
      } else if (titles.length === 1) {
        mountedObject.onlyTitle = {
          element: titles[0]
        }
      }
    },
  },

  created() { },

  mounted() {
    this.init();
  },

  computed: {
    currentSelectBrand() {
      return this.iconArray[this.currentIndex];
    },
    componentUnitNum() {
      return 0;
    }
  },

  watch: {
    currentIndex() {
      if (this.currentSelectBrand.onlyTitle) {
        this.scrollTo(this.currentSelectBrand.onlyTitle);
      }
    }
  },

  components: {
    raw,
    vant: defineAsyncComponent(() => import("../rawComponents/vant")),
    // iview,
    // quasar,
    ele: defineAsyncComponent(() => import("../rawComponents/element/index.vue")),
    antd: defineAsyncComponent(() => import("../rawComponents/antd"))
  },

};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  height: 100%;
}

nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f0f0f0;
}

.second-nav {
  padding: 10px 15px;
  width: 130px;
  &:hover {
    background-color: #ecf5ff;
    border-radius: 5px;
    color: #409eff;
  }
}

.l-icon {
  width: 34px;
  height: 34px;
  border-radius: 5px;
}

.main-icon-container {
  padding: 10px;
  line-height: 0;

  &:hover {
    background: rgb(236, 245, 255);
    border-radius: 5px;
  }
}
.active {
  border-right: 3px solid #409EFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

:v-deep(.el-submenu__title) {
  padding: 0 15px !important;
}

.dismiss-scroll {
  overflow: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.main-title {
  font-size: 30px;
  font-weight: 700;
  color: #409EFF;
  // color: #000000;
  transform: rotate(-90deg) translateY(29px);
  white-space: nowrap;
  position: absolute;
  left: 0;
  height: 80px;
  line-height: 80px;
  transform-origin: 0% 50%;
}

.subtitle {
  font-size: 14px;
  font-weight: 700;
  margin-left: 20px;
}

.bottom-toolbar {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0;
}

@-webkit-keyframes twinkling {
  /*Transparency from 0 to 1*/
  0% {
    opacity: 0; /*Transparency of 0*/
  }
  100% {
    opacity: 1; /*Transparency of 1*/
  }
}

.el-icon-question {
  -webkit-animation: twinkling 1s infinite ease-in-out alternate;
}
</style>
