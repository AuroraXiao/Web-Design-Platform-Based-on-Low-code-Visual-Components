<template>
  <a-list style="margin-top: 10px;" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }"
    :data-source="data">
    <template v-slot:renderItem="{item}">
      <a-list-item>
        <a-card hoverable @click="view(item.template_id)">
          <template v-slot:cover>
            <img alt="example" class="thumbnail"
              :src="item.thumbnail ? item.thumbnail : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'" />
          </template>
          <template v-slot:actions>
            <el-button size="small" @click="clone(item.template_id)">
              克隆
            </el-button>
          </template>
          <a-card-meta :title="item.name" :description="`${item.release_user_name} 被克隆次数: ${item.clone}`">
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>

    <template v-slot:footer v-if="data && data.length > 0">
      <div style="text-align:center;">
        <a-pagination :default-current="page" :total="count" @change="onPageChange" />
      </div>
    </template>
  </a-list>
</template>

<script>
import services from "@/request";
import { mapState } from 'vuex';
const { cloneTemplate, fetchPiazzaList } = services;

const data = [
];

export default {
  name: "LPiazza",
  data() {
    return {
      data,
      count: 0,
      page: 1
    };
  },
  mounted() {
    this.getAll();
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    getAll() {
      fetchPiazzaList({
        page: this.page,
        page_size: 10
      }).then(res => {
        this.data = res.data.rows;
        this.count = res.data.count;
      })
    },
    onPageChange(page) {
      this.page = page;
      this.getAll();
    },
    createNew() {
      createProject({
        name: '未命名',
        user_id: this.userInfo.user_id,
      }).then(res => {
        this.$router.push({
          path: '/main',
          query: {
            pi: res.data.project_id
          }
        });
      }).catch(err => {
        this.$message.error(err);
      })
    },

    view(project_id) {
      this.$router.push({
        path: '/main',
        query: {
          pi: project_id,
          come_from: 'piazza'
        }
      });
    },

    clone(template_id) {
      cloneTemplate({
        template_id,
        user_id: this.userInfo.user_id,
      }).then(res => {
        if (res.data) {
          this.$message.success('已克隆模板至我的项目中')
        }
      })
    }
  }
};
</script>
<style>
.thumbnail {
  height: 200px;
  object-fit: contain;
}
</style>