<template>
  <view class="userInfo">
    <!-- 用户信息 -->
    <view class="user-item">
      <view class="userText">我的</view>
      <view class="user-content">
        <view class="user-Img"></view>
        <view class="user-box">
          <view class="user-name">{{username}}</view>
          <view class="user-id">UID:{{userId}}</view>
        </view>
      </view>
    </view>
    <!-- 第二部分 -->
    <view class="order-from">
      <!-- 我的订单类 -->
      <view class="order-nav">
        <view class="nav-item" @click="typeClick(index)" v-for="(item,index) in orderList" :key="index">
          <view class="nav-img">
            <image class="i-img" :src="item.Img"></image>
          </view>
          <view class="nav-text">{{item.title}}</view>
        </view>

      </view>
      <!-- 第三部分 -->
      <view class="category">
        <view class="category-item" v-for="(item,index) in zixunList" :key="index">
          <view class="item-Img">
            <image class="t-Img" :src="item.Img" />
          </view>
          <view class="item-text">{{item.title}}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      username: "可爱如我",
      message: "我的",
      userId: "155933",
      zixunList:[{ title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'},
      { title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'},
      { title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'},
      { title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'},
      { title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'},
      { title:'在线咨询',Img:'../../static/usInfo/yaoqing.png'}],
      orderList: [{
        id:'1',
            title:'我的订单',
            Img:"../../static/usInfo/yaoqing.png"
        },
        {
          id:'1',
              title:'我的订单',
              Img:"../../static/usInfo/yaoqing.png"
        },
        {
          id:'1',
              title:'我的订单',
              Img:"../../static/usInfo/yaoqing.png"
        }]
    };
  },
  methods:{
    typeClick() {
      uni.navigateTo({
        url: '/pages/myOrder/index'
    })
  }
  }
};
</script>
<style lang="less" scope>
.userInfo {
  padding-bottom: 10px;
  .user-item {
    height: 400px;
    background-color: #161a2d;
    .userText {
      padding-top: 65px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      text-align: center;
      margin-bottom: 50px;
    }
    .user-content {
      height: 128px;
      padding: 0 30px;
      display: flex;
      margin-bottom: 80px;
      align-items: center;
      .user-Img {
        height: 128px;
        width: 128px;
        border-radius: 50%;
        margin-right: 20px;
        border: 1px solid red;
      }
      .user-box {
        flex: 1;
        margin-top: 18px;
        .user-name {
          font-size: 28px;
          color: #fff;
          margin-bottom: 20px;
        }
        .user-id {
          font-size: 22px;
          color: #fff;
        }
      }
    }
  }
  .order-from {
    padding: 0 30px;
    // background-color: #161a2d; // 要改颜色
    .order-nav {
      height: 154px;
      display: flex;
      position: relative;
      background-image:url('../../static/indexImg/BTC-zc.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      top: -80px;
      box-sizing: border-box;
      .nav-item {
        width: 345px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .nav-img {
          height: 44px;
          width: 44px;
          margin-bottom: 15px;
          .i-img{
            height: 44px;
            width: 44px;
          }
        }
        .nav-text {
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .category {
      height: 480px;
      margin-top: -50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .category-item {
        width: 49%;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: content-box;
        background-color: #161A2D;
        .item-Img{
          height: 48px;
          width: 45px;
          margin-bottom: 27px;
          .t-Img{
            height: 48px;
            width: 45px;
          }
        }
        .item-text {
          color: #fff;
          font-size: 25px;
        }
      }
    }
  }
}
</style>