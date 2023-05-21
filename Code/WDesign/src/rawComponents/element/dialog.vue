  <template lc_id="4TgPahC6u5">
      <div lc_id="vxLzr2xqjb">
          <div lc_id="tWzGb0zt3I"></div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => { });
    },
  },
};  </script>
  <style scoped></style>
