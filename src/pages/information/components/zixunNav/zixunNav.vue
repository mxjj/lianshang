<template>
<!-- 矿圈咨询导航栏对应内容 -->
  <view class="bigbox">
    <view class="mbox" v-for="(item,index) in list" :key="index">
      <view class="textbox">{{item.title}}</view>
      <view class="datebox">{{item.text}}</view>
      <view class="textcontent">{{item.content}}</view>
    </view>
    <!-- 矿业咨询 && 矿业百科-->
    <view class="zixunbox">
      <!-- 轮播图 -->
      <view class="kybox">
        <swiper class="swiper" 
            indicator-dots="true" 
            autoplay="true" 
            interval="5000" 
            duration="1500"	>
           <swiper-item >
			    <image class="sw-img" src="../../static/indexImg/swiperImg.png" ></image>
		        </swiper-item>
            <swiper-item>
              <image class="sw-img" src="../../static/indexImg/swiperImg.png"></image>
          </swiper-item>
        </swiper>
      </view>
      <!-- 详情 -->
      <view class="xqbox">
        <view class="xq-Item">
          <view class="xq-Img">
            <image class="Imgs" src="../../static/indexImg/swiperImg.png">
          </view>
          <view class="xq-text">
            <view class="xq-title">2019年挖矿收益盘点云算力挖矿普遍盈利</view>
            <!-- 日期 -->
            <view class="xq-bot">
             <view class="xq-date">
               2019-12-17  13:14:52
             </view>
             <view class="xq-date">
               1155浏览
             </view>
            </view>
          </view>
        </view>
      </view>
    </view>


  </view>
</template>
<script>
export default {
  name: "zixunNav",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.bigbox {
  padding: 0 30px;
  .mbox {
    border: 1px solid red;
    padding: 20px 30px;
    background-color: #161a2d;
    .textbox {
      font-size: 30px;
      color: #fff;
      margin-bottom: 15px;
    }
    .datebox {
      font-size: 18px;
      margin-left: 15px;
      color: #999999;
      margin-bottom: 30px;
    }
    .textcontent {
      width: 100%;
      font-size: 24px;
      color: rgba(153, 153, 153, 1);
      text-indent: 2em;
      line-height: 1.8em;
      letter-spacing: 1px;
      box-sizing: content-box;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  // 轮播图
  .zixunbox {
    .kybox {
      height: 230px;
      width: 100%;
          .swiper{
      width: 100%;
      height: 230px;
      .sw-img{
        width: 100%;
        height: 100%;
      }
    }
    }
    .xqbox {
      .xq-Item {
        display: flex;
        justify-content: space-around;
        padding: 28px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #262A3E;
        .xq-Img {
          height: 120px;
          width: 200px;
          margin-right: 30px;
          .Imgs{
            height: 120px;
            width: 200px;
          }
        }
        .xq-text{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .xq-title{
            max-height: 70px;
            font-size:26px;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .xq-bot{
            display: flex;
            justify-content: space-between;
            font-size:20px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>