<template>
  <view class="content-item">
    <!-- 遮罩层 -->
    <homePage v-if="page_code=='home'"></homePage>
    <zixunPage v-if="page_code=='zixun'"></zixunPage>
    <!-- 中间 -->

    <pageTwo v-if="page_code=='pertolcs'"></pageTwo>

    <kqPage v-if="page_code=='kqPage'"></kqPage>
    <pageThree v-if="page_code=='my'"></pageThree>
    <footerNav></footerNav>
  </view>
</template>

<script>
import homePage from "../index/index";
import zixunPage from "../information/information";
import pageTwo from "../information/information";
import kqPage from "../participation/part";
import pageThree from "../usInfo/user";
import footerNav from "../components/footer_nav/footer_nav";
export default {
  data() {
    return {};
  },
  components: {
    homePage,
    zixunPage,
    pageTwo,
    pageThree,
    kqPage,
    footerNav
  },

  computed: {
    page_code() {
      return this.$store.state.footer_store.footer_nav[
        this.$store.state.footer_store.now_page_index
      ].name_code;
    }
  },
  onLoad() {},
  methods: {
    showPopup() {
      // #ifdef APP-PLUS
      uni.navigateTo({
        url: "/pages/popup/popup"
      });
      // #endif
      // #ifndef APP-PLUS
      uni.showModal({
        title: "仅支持App端"
      });
      // #endif
    }
  }
};
</script>

<style scope>
.content-item {
  padding-bottom: 100px;
}
/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200px;
  width: 200px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36px;
  color: #8f8f94;
}

.logo {
  height: 200px;
  width: 200px;
  margin-top: 200px;
} */

/* .title {
  font-size: 36px;
  color: #8f8f94;
  border: 1px solid red;
} */
</style>
