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
        <view class="nav-item">
          <view class="nav-img"></view>
          <view class="nav-text">我的订单</view>
        </view>
        <view class="nav-item">
          <view class="nav-img"></view>
          <view class="nav-text">收益</view>
        </view>
        <view class="nav-item">
          <view class="nav-img"></view>
          <view class="nav-text">优惠券</view>
        </view>
      </view>
      <!-- 第三部分 -->
      <view class="category">
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
        </view>
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
        </view>
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
        </view>
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
        </view>
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
        </view>
        <view class="category-item">
          <view class="item-Img"></view>
          <view class="item-text">在线咨询</view>
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
      dataList: [{

      }]
    };
  }
};
</script>
<style lang="less" scope>
.userInfo {
  .user-item {
    height: 400px;
    border: 1px solid red;
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
      margin-bottom: 114px;
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
    background-color: #161a2d; // 要改颜色
    .order-nav {
      height: 170px;
      display: flex;
      position: relative;
      top: -100px;
      box-sizing: border-box;
      .nav-item {
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        .nav-img {
          height: 44px;
          width: 44px;
          margin-bottom: 15px;
          border: 1px solid red;
        }
        .nav-text {
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .category {
      margin-top: -50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border: 1px solid red;
      .category-item {
        height: 208px;
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        .item-Img{
          height: 48px;
          width: 45px;
          margin-bottom: 27px;
          border: 1px solid red;
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