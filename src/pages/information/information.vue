<template>
  <view class="mbox">
    <!-- 资讯标题 -->
    <view class="header">
      <wuctab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabCurClick" />
    </view>
    <!-- 内容 -->
    <view class="content">
      <zixunNav :list="list" />
    </view>
  </view>
</template>

<script>
import wuctab from ".././components/wuc-tab/wuc-tab";
import zixunNav from "./components/zixunNav/zixunNav";
import { mapState } from "vuex";
export default {
  name:'information',
  components: {
    wuctab,
    zixunNav
  },
  computed: {
    ...mapState(["userInfo"])
  },
  data() {
    return {
      TabCur: 1,  // 导航栏索引
      message: "商城",
      list:[],
      textlist: [
        {
          title: "以太坊将于区块高度9200000进行“缪尔冰川”硬分叉",
          data: "2019-12-24  13:14:52",
          content:"币核心开发人员约翰·纽伯里最近发布一系列推文，探讨2020年比特币发展路线图。其中包括：1、闪电网络是2020年比特币核心关注点。闪电网络开发团队将会继续开发相关协议，包括c-lightning (Blockstream)、查了疯是我奴乳备回家搜嘎大家好撒挂机啊"
        }
      ],
      tabList: [            // 导航栏
        { name: "矿圈资讯" },
        { name: "矿业资讯" },
        { name: "矿圈百科" }
      ]
    };
  },
  onLoad() {
    //  this.list = this.textlist;
  },

  methods: {
    Click() {
      let data = "客户";
      this.$store.commit("login", data);
    },
     // 点击索引栏
    tabCurClick(index) {
      this.list = this.textlist;
    }
  }
};
</script>

<style lang="less" scope>
.mbox {
  height: 800px;
  padding-top: 20px;
  background-color: #1d1e30;
  border: 1px solid red;
  .header {
    height: 88px;
    display: flex;
    color: rgba(153, 153, 153, 1);
    background-color: #161a2d;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }
 
}
</style>
