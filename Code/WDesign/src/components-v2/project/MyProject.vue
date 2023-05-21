<template>
  <div>
    <el-button type="primary" size="small" @click="createNew">
      新建一个项目
    </el-button>
    <a-list style="margin-top: 20px;" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }"
      :data-source="data" :locale="{ emptyText:'您还没有模板，马上创建一个吧~'}">
      <template v-slot:renderItem="{item}">
        <a-list-item>
          <a-card hoverable>
            <template v-slot:cover>
              <img alt="example" class="thumbnail"
                :src="item.thumbnail ? item.thumbnail : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'" />
            </template>
            <template v-slot:actions>
              <el-button size="small" @click="edit(item.project_id)">
                编辑
              </el-button>
              <el-button size="small" @click="clone(item.project_id)">
                克隆
              </el-button>
              <a-popconfirm title="确认要删除这个项目吗?" ok-text="是的" cancel-text="点错了"
                @confirm="deleteProject(item.project_id)">
                <el-button type="danger" size="small">
                  Delete
                </el-button>
              </a-popconfirm>
            </template>
            <a-card-meta :title="item.name">
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
  </div>
</template>
<script>
import services from "@/request";
import { mapState } from 'vuex';
const { fetchProjectList, createProject, deleteMyProject, cloneProject } = services;
import Chance from 'chance';
const chance = new Chance();

export default {
  data() {
    return {
      data: [],
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

    getAll() {
      fetchProjectList({
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
        name: chance.animal(),
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

    edit(project_id) {
      this.$router.push({
        path: '/main',
        query: {
          pi: project_id
        }
      });
    },

    clone(project_id) {
      cloneProject({
        project_id,
        user_id: this.userInfo.user_id,
      }).then(res => {
        if (res.data) {
          this.$message.success('已克隆');
          this.getAll();
        }
      })
    },

    deleteProject(project_id) {
      deleteMyProject({
        project_id: project_id
      }).then(res => {
        if (res.data) {
          this.$message.success('删除成功');
          this.getAll();
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
