<template>
  <view>
    <view v-if="this.typeItem == 0">
      <view class="datebox col-99">
        <view>时间</view>
        <view>净收益</view>
        <view>累计收益</view>
      </view>
    </view>
    <view v-if="this.typeItem == 1">
      <view class="datebox col-99">
        <view>时间</view>
        <view style="margin-left:30px;">数量/元算力</view>
        <view style="margin-right:10px;">状态</view>
        <view>操作</view>
      </view>
      <view>
        <view class="content">
          <view class="yeardate">
            <view class="t-con col-f fs-26">2019-12-17</view>
            <view class="d-con col-99 fs-24">13:14:00</view>
          </view>
          <view class="yeardate">
            <view class="t-con col-f fs-26">2019-12-17</view>
            <view class="d-con col-99 fs-24">13:14:00</view>
          </view>
          <view class="yeardate">
            <view class="yearImg"></view>
          </view>
          <view class="yeardate">
            <view class="t-con col-f fs-26">未知</view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="this.typeItem == 2">
      <view class="electric">
        <view class="elect-title fs-28 col-f">神马M21S算力（新用户专享/限T1）</view>
          <!-- 购买时间 -->
        <view class="elect-nav">
          <view class="elect-item">
            <view class="elect-t fs-24 col-99 mb-14">购买时间</view>
            <view class="elect-b fs-26 col-f">2019-12-17 13:14:15</view>
          </view>
           <view class="elect-item">
            <view class="elect-t fs-24 col-99 mb-14">购买时间</view>
            <view class="elect-b fs-26 col-f">2019-12-17 13:14:15</view>
          </view>
        </view>
        
        <!-- annual -->
        <view class="elect-btn">
          <view class="ele-btn bg-596 fs-28 col-f">立即续费</view>
        </view>
      </view>
    </view>

    <view v-if="this.typeItem == 0">
      <view class="content">
        <view class="yeardate">
          <view class="t-con col-f fs-28">2019-12-17</view>
          <view class="d-con col-99 fs-24">13:14:00</view>
        </view>
        <view class="yeardate">
          <view class="t-con col-f fs-28">2019-12-17</view>
          <view class="d-con col-99 fs-24">13:14:00</view>
        </view>
        <view class="yeardate">
          <view class="t-con col-f fs-28">2019-12-17</view>
          <view class="d-con col-99 fs-24">13:14:00</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "colundimg",
  data() {
    return {};
  },
  props: {
    // dataList: {
    //   type: Array,
    //   value: ""
    // },
    typeItem: {
      type: Number,
      value: 2
    }
  }
};
</script>
<style lang="less" scoped>
.datebox {
  margin:20px 25px;
  height: 88px;
  background-color: #2e3047;
  padding: 0 40px;
  display: flex;
  font-size: 27px;
  align-items: center;
  justify-content: space-between;
}
.content {
  margin:20px 25px;
  display: flex;
  justify-content: space-around;
  height: 132px;
  border-bottom: 1px solid #252a40;
  .yeardate {
    display: flex;
    min-width: 80px;
    flex-direction: column;
    height: 100%;
    .t-con {
      margin-top: 33px;
    }
    .d-con {
      margin-top: 20px;
    }
    .yearImg {
      margin-top: 40px;
      height: 60px;
      width: 60px;
      border: 1px solid red;
    }
  }
}
.electric {
  height: 300px;
  background-color: #161A2D;
  padding-bottom: 30px;
  margin:20px 25px;
  .elect-title {
    height: 87px;
    line-height: 87px;
    padding: 0 28px;
    border-bottom: 1px solid #252a40;
  }
  .elect-nav {
    padding: 30px 10px;
    display: flex;
    .elect-item {
      padding-left: 8px;
      width: 49.9%;
    }
  }
  .elect-btn {
    height: 80px;
    width: 100%;
    display: flex;
    margin: 10px 0;
    .ele-btn {
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin:0 auto;
      width: 420px;
    }
  }
}
</style>