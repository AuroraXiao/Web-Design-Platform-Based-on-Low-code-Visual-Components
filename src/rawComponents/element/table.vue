  <template lc_id="f5Ag3iA9vi">
      <div lc_id="rC5FKIl93Q">
          <div lc_id="5hZQP7chtb">
              <div class="demonstration-element" lc_id="yKAcBIB8ML">Basic Table</div>
              <el-table :data="tableData" style="width: 100%" lc-mark lc_id="h1AxSuk1JX">
                  <el-table-column prop="date" label="Date" width="180" lc_id="N5KOR7kGoN"></el-table-column>
                  <el-table-column prop="name" label="Name" width="180" lc_id="v3jApEZujz"></el-table-column>
                  <el-table-column prop="address" label="Address" lc_id="Ryei21Kxoy"></el-table-column>
              </el-table>
          </div>
          <div lc_id="FoIEdS4sgT">
              <div class="demonstration-element" lc_id="9MFKGxfvJ5">Dynamic Table</div>
              <el-table :data="tableData" style="width: 100%" lc-mark lc_id="+5AJzAYChF">
                  <el-table-column :prop="propItem.prop" :label="propItem.label" v-for="propItem in propList" :key="propItem.prop" lc_id="gfwgFzB3gO">
                      <template v-slot="{ row }" lc_id="WHqNxzDsFe">
                          <span v-if="!propItem.component" lc_id="isWGW9SLlm">{{
              row[propItem.prop]
            }}</span>
                          <component v-else v-bind:is="propItem.component" :rowinfo="row" lc_id="DktA4JZ5fs"></component>
                      </template>
                  </el-table-column>
              </el-table>
          </div>
          <div lc_id="GHEnA/+R+x">
              <div class="demonstration-element" lc_id="LphVmiAWKZ">Basic Pagination</div>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" lc-mark layout="prev, pager, next" :total="400" lc_id="V3nz0Q3sZA"></el-pagination>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          date: "2022-12-30",
          name: "Aurora",
          address: "No.1, East 3rd Road, Erxianqiao, Chengdu",
        },
        {
          date: "2023-01-02",
          name: "Aurora",
          address: "No.2, East 3rd Road, Erxianqiao, Chengdu",
        },
        {
          date: "2023-01-06",
          name: "Aurora",
          address: "No.3, East 3rd Road, Erxianqiao, Chengdu",
        },
        {
          date: "2023-01-10",
          name: "Aurora",
          address: "No.4, East 3rd Road, Erxianqiao, Chengdu",
        },
      ],
      propList: [
        {
          label: "Name",
          prop: "name",
        },
        {
          label: "Date",
          prop: "date",
        },
        {
          label: "Address",
          prop: "address",
        },
        {
          label: "Dynamic Component",
          prop: "lc-component",
          component: "el-switch"
        },
      ],
    };
  },
  methods: {
    handleSizeChange() { },
    handleCurrentChange() { },
  },
};  </script>
  <style scoped></style>
