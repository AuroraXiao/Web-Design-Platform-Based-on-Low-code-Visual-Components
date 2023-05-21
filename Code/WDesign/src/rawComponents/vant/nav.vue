  <template lc_id="/QY7monDLp">
      <div lc_id="/ntrNy7wOc">
          <div lc_id="ta6EIAh72H">
              <div class="demonstration-vant" lc_id="ZMbTJO4efl">Basic Grid</div>
              <van-grid lc-mark lc_id="X08eZY9vTs">
                  <van-grid-item icon="photo-o" text="text" lc_id="X7rCKONAIT"></van-grid-item>
                  <van-grid-item icon="photo-o" text="text" lc_id="LMykLYqUkC"></van-grid-item>
                  <van-grid-item icon="photo-o" text="text" lc_id="E2Hd160o5Q"></van-grid-item>
                  <van-grid-item icon="photo-o" text="text" lc_id="d34lSEesuk"></van-grid-item>
              </van-grid>
          </div>
          <div lc_id="dS3rIMgHEa">
              <div class="demonstration-vant" lc_id="PMja4pIbgj">Basic NavBar</div>
              <van-nav-bar lc-mark title="Title" left-text="Return" right-text="Button" left-arrow @click-left="onClickLeft" @click-right="onClickRight" lc_id="REnoRWpVUY"></van-nav-bar>
          </div>
          <div lc_id="UhV4g9qnPl">
              <div class="demonstration-vant" lc_id="GEoGgaEQRn">Basic Pagination</div>
              <van-pagination lc-mark v-model="currentPage13" :total-items="24" :items-per-page="5" lc_id="IOGXwSfLUN"></van-pagination>
          </div>
          <div lc_id="DY3MQ06idt">
              <div class="demonstration-vant" lc_id="Y/UGT4oFUC">Basic Sidebar</div>
              <van-sidebar v-model="activeKey" lc-mark lc_id="7AlKZZMGtG">
                  <van-sidebar-item title="LabelName" lc_id="YGZitVPi4d"></van-sidebar-item>
                  <van-sidebar-item title="LabelName" lc_id="hWh5LOl2oL"></van-sidebar-item>
                  <van-sidebar-item title="LabelName" lc_id="TshkJd38qC"></van-sidebar-item>
              </van-sidebar>
          </div>
          <div lc_id="6QKkhZ8evV">
              <div class="demonstration-vant" lc_id="U6vxh2loAk">Tab Label</div>
              <van-tabs v-model="active14" lc-mark lc_id="rohxtUBk/l">
                  <van-tab title="Label 1" lc_id="MSSxMZ2ebB">Content 1</van-tab>
                  <van-tab title="Label 2" lc_id="f+cAezYPuU">Content 2</van-tab>
                  <van-tab title="Label 3" lc_id="N36xJv03F6">Content 3</van-tab>
                  <van-tab title="Label 4" lc_id="iy8oej8ecZ">Content 4</van-tab>
              </van-tabs>
          </div>
          <div lc_id="HFSjLBSjr4">
              <div class="demonstration-vant" lc_id="5zilvW7BTu">Basic ActionBar</div>
              <div style="position: relative;" lc-mark lc_id="Pt76lmgRrB">
                  <van-action-bar lc_id="9ToRhiLix2">
                      <van-action-bar-icon icon="chat-o" text="Customer Service" @click="onClickIcon" lc_id="+KLvcHu+dq"></van-action-bar-icon>
                      <van-action-bar-icon icon="cart-o" text="Shopping Cart" @click="onClickIcon" lc_id="jmPWsraNbw"></van-action-bar-icon>
                      <van-action-bar-icon icon="shop-o" text="Shop" @click="onClickIcon" lc_id="9nvKcSlBKx"></van-action-bar-icon>
                      <van-action-bar-button type="danger" text="Buy Now" @click="onClickButton" lc_id="SxUbF/TzkY"></van-action-bar-button>
                  </van-action-bar>
              </div>
          </div>
          <div lc_id="kzIjwCrNnO">
              <div class="demonstration-vant" lc_id="8dbio3vxQH">Basic AddressEdit</div>
              <van-address-edit :area-list="areaList" show-postal lc-mark show-delete show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['Please select', 'Please select', 'Please select']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" lc_id="Tn1/r0M9YC"></van-address-edit>
          </div>
          <div lc_id="wa8o497uS2">
              <div class="demonstration-vant" lc_id="eUXBZScEN8">Basic Card</div>
              <van-card num="2" lc-mark price="2" desc="Description" title="Product Title" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" lc_id="cBHYsOWBw2"></van-card>
          </div>
          <div lc_id="8m37ZW49xJ">
              <div class="demonstration-vant" lc_id="WFfLIn2BMo">Purchase ActionBar</div>
              <van-submit-bar style="position: relative;" lc-mark :price="3050" button-text="Submit Order" @submit="onSubmit" lc_id="iGAW34dMaI"></van-submit-bar>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      checked12: false,
      currentPage13: 1,
      activeKey: 0,
      active14: 2,
      areaList: {},
      searchResult: [],

      chosenAddressId: "1",
      list15: [
        {
          lc_id: "1",
          name: "Tom",
          tel: "13000000000",
          address: "Room 501, 7/F, Dongfang Communication Building, No. 138 Wen San Road, Xihu District, Hangzhou, Zhejiang Province",
          isDefault: true,
        },
        {
          lc_id: "2",
          name: "Andy",
          tel: "1310000000",
          address: "No. 50 Moganshan Road, Gongshu District, Hangzhou, Zhejiang Province",
        },
      ],
      disabledList: [
        {
          lc_id: "3",
          name: "James",
          tel: "1320000000",
          address: "No. 15 Jiangnan Avenue, Binjiang District, Hangzhou, Zhejiang Province",
        },
      ],
    };
  },
  methods: {
    onClickIcon() {
      Toast("Click the icon");
    },
    onClickButton() {
      Toast("Click the button");
    },
    onAdd() {
      Toast("Add address");
    },
    onEdit(item, index) {
      Toast("Edit address:" + index);
    },
    onClickLeft() {
      Toast("Return");
    },
    onClickRight() {
      Toast("Button");
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "Huanglong Vanke Centre",
            address: "Xihu District, Hangzhou",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    onSubmit11() { },
    onClickEditAddress() { },
  },
};  </script>
  <style scoped>:v-deep(.van-tabbar--fixed) {
  position: initial;
}
:v-deep(.van-address-list__bottom) {
  position: relative;
}
:v-deep(.van-submit-bar) {
  position: initial;
}</style>
  <style>
.van-action-bar {
  position: relative;
  padding-bottom: 0;
}

.van-submit-bar {
  z-index: 0;
}  </style>
