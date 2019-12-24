<template>
  <div class="wrap" @click="click">{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      message: "首页"
    };
  },
  methods: {
    click() {
      this.$Router.pushTab({
        page: `/pages/shopp/shopp`,
        params: {}
      });
      // uni.switchTab({
      // 	 url:`/pages/shopp/shopp`
      //  })
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  height: 50px;
  font-size: 28px;
  padding: 0 30px;
  border: 1px solid red;
  text-align: center;
}
</style>
