<template>
  <view class="mbox">
    <WucTab
      class="Tabitem col-99 fs-31"
      :tab-list="tabList"
      :tabCur.sync="TabCur"
      @change="tabChange"
      selectClass="text-green"
    />
    <!-- 内容 -->
    <view class="content-nav">
        <!-- datalist:数组。type:类型 -->
      <cloundItem  :typeItem = this.typeItem />
    </view>
  </view>
</template>
<script>
import cloundItem from "./clound-ing";
export default {
  components: { cloundItem },
  data() {
    return {
      TabCur: 0,
      tabList: [
        { name: "收益记录", id: 1 },
        { name: "购买记录", id: 2 },
        { name: "电费缴费", id: 3 }
      ],
      typeItem:0
    };
  },
  methods: {
    tabChange(index) {
      this.TabCur = index;
      this.typeItem = index
      console.log(index)
    }
  }
};
</script>
<style lang="less" scope>
.mbox {
  .Tabitem {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-weight: 550;
    letter-spacing: 2px;
  }
}
</style>