<template>
  <div @click="Click">{{this.userInfo}}</div>
</template>

<script>
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  data() {
    return {
      message: "商城"
    };
  },
  onLoad() {},

  methods: {
    Click() {
      let data = "客户"
      this.$store.commit("login",data)
    }
  }
};
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
