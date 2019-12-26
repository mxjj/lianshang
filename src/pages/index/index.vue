<template>
  <view class="wrap">
    <!-- 轮播图 -->
    <view class="wrap-Img">
   	  <swiper class="swiper" 
            indicator-dots="true" 
            autoplay="true" 
            interval="5000" 
            duration="1500"	>
           <swiper-item>
			    <image class="sw-img" src="../../static/indexImg/swiperImg.png" ></image>
		  </swiper-item>
        <swiper-item>
			    <image class="sw-img" src="../../static/indexImg/swiperImg.png"></image>
		  </swiper-item>
	 </swiper>
  </view> 
    <view class="broad">   
      <view class="broad-left"></view>
      <view class="broad-right">{{text}}</view>
    </view>
     <view class="mbox">
        <view class="cuv-item">
      <view class="cuy-I">
        <view class="cuy-text">BTC/CNY</view>
        <view class="cuy-top">52.420.25</view>
        <view class="cuy-bot">
          <view class="cuy-zb">-0.08</view>
          <view class="cuy-bt"></view>
        </view>
      </view>
      <view class="cuy-I">
        <view class="cuy-text">ETH/CNY</view>
        <view class="cuy-top">296.25</view>
          <view class="cuy-bot">
          <view class="cuy-zb">-0.08</view>
          <view class="cuy-bt"></view>
        </view>
      </view>
      <view class="cuy-I">
        <view class="cuy-text">DCR/CNY</view>
        <view class="cuy-top">52.420.25</view>
          <view class="cuy-bot">
          <view class="cuy-zb">-0.08</view>
          <view class="cuy-bt"></view>
        </view>
      </view>
    </view>
    <!-- 下一层 -->
    <view class="my-zc">
      <view class="my-left">我的资产</view>
      <view class="my-right">每秒动态增长，实时挖矿数据</view>
    </view>
    <view class="yuji-chanchu">
      <p class="yuji">预计BTC产出</p>
      <p class="word">0.123456BTC</p>
    </view>
    <view class="my-zc">
      <view class="my-item">矿机工具</view>
    </view>
    <view class="jisuan">
      <view class="j-left">
        <p class="j-p-top">收益计算</p>
        <p class="j-p-bottom">矿机收益计算</p>
      </view>
      <view class="j-right">
        <p class="j-p-top"
        >矿机收益</p>
        <p class="j-p-bottom">矿机行情收益</p>
      </view>
    </view>

    <view class="floor">
      <view class="floor-item"></view>
      <view class="zanwei">暂未添加收益</view>
      <view class="qxz">请选择币种添加矿机收益</view>
      <view class="add-buttom">+添加矿机收益</view>
    </view>
     </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      message: "首页",
      text:'互联网在线关于“约谈”问题的正式公告'
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.wrap {
  height: 100%;
  .wrap-Img {
    .swiper{
      width: 100%;
      height: 375px;
      .sw-img{
        width: 100%;
        height: 375px;
      }
    }
  }
  .broad{
    display: flex;
    padding: 25px 30px;
    background:linear-gradient(0deg,rgba(13,15,30,1),rgba(22,25,42,1));
    .broad-left{
      height: 34px;
      width: 34px;
      background-image: url('../../static/indexImg/xiaoxi.png');
      background-size: 100%;
    }
    .broad-right{
      margin-left: 21px;
      font-size: 23px;
      color: #fff;
    }
  }
  .mbox{
  padding: 30px;
  background-color: #1d1e30;
  box-sizing: border-box;
  .cuv-item {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    .cuy-I {
      height: 168px;
      width: 216px;
      background-image: url("../../static/indexImg/shuju.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      margin: 0 5px;
      .cuy-text {
        font-size: 21px;
        color: #fff;
        height: 44px;
        line-height: 44px;
        margin-bottom: 40px;
        text-align: center;
      }
      .cuy-top{
        color: #fff;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size:22px;
        margin-bottom: 10px;
      }
      .cuy-bot{
        color: #fff;
        height: 20px;
        line-height: 20px;
        text-align: center;
        letter-spacing:2px;
        color: red;
        font-size:15px;
      }
    }
  }
  .my-zc {
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-image: url("../../static/indexImg/zc-Img.png");
    background-repeat: no-repeat;
    background-size: 100%;
    margin-bottom: 10px;
    .my-left {
      width: 200px;
      color: #fff;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 26px;
      background-image: url("../../static/indexImg/mv-zican.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .my-right {
      height: 60px;
      font-size: 24px;
      line-height: 60px;
      text-align: right;
      color: #999999;
      margin-right: 26px;
    }
    .my-item{
       width: 200px;
      color: #fff;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 26px;
      background-image: url("../../static/indexImg/kj-Img.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
  .yuji-chanchu {
    height: 212px;
    padding-top: 40px;
    background-image: url('../../static/indexImg/BTC-zc.png');
    background-repeat: no-repeat;
    background-size: 100%;
    box-sizing: border-box; 
    .yuji {
      color: #999999;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 24px;
      margin-bottom: 27px;
    }
    .word {
      height: 40px;
      color: #6bd596;
      line-height: 40px;
      text-align: center;
      font-size: 36px;
      letter-spacing: 4px;
    }
  }
  .jisuan {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    .j-left {
      width: 45%;
      height: 150px;
      padding-left: 10px;
      background-image: url('../../static/indexImg/js-Img.png');
       background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .j-right {
      width: 45%;
      height: 150px;
      padding-left: 10px;
      background-image: url('../../static/indexImg/sy-Img.png');
       background-repeat: no-repeat;
      background-size: 100% 100%;
  }
  .j-p-top{
      height:27px;
      font-size:24px;
      margin-top: 46px;
      margin-bottom: 19px;
      color:#ffffff;
      font-family:PingFangSC;
      font-weight:600;
  }
  .j-p-bottom {
    height:12px;
    font-size:12px;
    color: #999999;
  }
  }
  .floor {
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2E3045;
    .floor-item {
      height: 98px;
      width: 98px;
      border-radius: 50%;
      margin-bottom:29px; 
      background:rgba(71,72,91,1);
    }
    .zanwei {
      height: 28px;
      font-size: 25px;
      font-family: PingFangSC;
      font-weight: 600;
      margin-bottom: 22px;
      color: #fff;
    }
    .qxz {
        height: 12px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 300;
      margin-bottom: 39px;
      color: rgba(153, 153, 153, 1);
    }
    .add-buttom {
        height: 88px;
        line-height: 88px;
        text-align: center;
        width: 420px;
        color: #fff;
        background-color:#61B583;
    }
  }
  }
}
</style>
