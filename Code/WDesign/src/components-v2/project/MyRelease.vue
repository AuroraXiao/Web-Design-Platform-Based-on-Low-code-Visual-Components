<template>
  <a-list style="margin-top: 10px;" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }"
    :data-source="data">
    <template v-slot:renderItem="{item}">
      <a-list-item>
        <a-card hoverable @click="edit(item.template_id)">
          <template v-slot:cover>

            <img alt="example" class="thumbnail"
              :src="item.thumbnail ? item.thumbnail : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'" />
          </template>
          <a-card-meta :title="item.name" :description="item.release_user_name">
            <template v-slot:avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
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
const { fetchMyRelease } = services;

const data = [
];

export default {
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

    getAll() {
      fetchMyRelease({
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

    edit(project_id) {
      this.$router.push({
        path: '/main',
        query: {
          pi: project_id,
          come_from: 'piazza'
        }
      });
    },
  }
};
</script>
<style>
.thumbnail {
  height: 200px;
  object-fit: contain;
}
</style>