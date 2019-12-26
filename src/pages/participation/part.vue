<template>
  <view class="mbox">
    <view class="heaer-title">
      <view class="header-t">矿圈</view>
    </view>
    <!-- 第二部分 -->
    <view class="content-box">
      <view v-for="(item,index) in dataList" :key="index">
        <view class="abox" :style="item.ImgUrl">
          <view class="abox-left">
            <view class="abox-t">{{item.title}}</view>
            <view class="abox-b">{{item.textNav}}</view>
          </view>
          <view class="abox-right">
            <view class="abox-d">
              <image class="abox-img" :src="item.iconUrl" />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: "BTC查询",
          textNav: "比特币查询",
          iconUrl: "../../static/kuanquan/dayu.png",
          ImgUrl:
            ' background-image: url("../../static/kuanquan/blue-Img.png");'
        },
        {
          title:'ETH查询',
          textNav:'以太坊查询',
          iconUrl:'../../static/kuanquan/dayu.png',
          ImgUrl:' background-image: url("../../static/kuanquan/origin-Img.png");'
        },
          {
          title:'LTC查询',
          textNav:'莱特币查询',
          iconUrl:'../../static/kuanquan/dayu.png',
          ImgUrl:' background-image: url("../../static/kuanquan/blue-Img.png");'
        },
         {
          title:'BCH查询',
          textNav:'以太经典查询',
          iconUrl:'../../static/kuanquan/dayu.png',
          ImgUrl:' background-image: url("../../static/kuanquan/res-Img.png");'
        }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.mbox {
  .heaer-title {
    height: 120px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #161a2d;
    .header-t {
      padding-top: 60px;
      height: 80px;
      font-size: 30px;
      line-height: 20px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(254, 255, 254, 1);
      text-align: center;
    }
  }
  .content-box {
    height: 100%;
    padding: 35px 25px;
    background-color: #1d1e30;
    .abox {
      height: 182px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 35px;
      .abox-left {
        width: 136px;
        .abox-t {
          font-size: 30px;
          color: #fff;
          margin-bottom: 20px;
        }
        .abox-b {
          font-size: 26px;
          color: #999999;
        }
      }
      .abox-right {
        .abox-d {
          height: 24px;
          width: 24px;
          .abox-img {
            height: 24px;
            width: 24px;
          }
        }
      }
    }
  }
}
</style>