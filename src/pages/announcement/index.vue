<template>
  <!-- 公告详情 -->
  <view class="outerbox">
    <view class="mbox">
      <view class="header col-f">
        公告名称公告消息公告二十四个字符不过二十四
        个字符
      </view>
      <view class="header-data col-99">18/07/07 13:14:00</view>
      <view
        class="header-nav col-f"
      >亚马逊公司（Amazon，简称亚马逊:NASDAQ：AMZN),是美国最大的一家网络电子商务公司，位于华盛顿州的西雅图。是网络上最早开始经营电子商务的公司之一，亚马逊成立于1995年，一开始只经营网络的书籍销售业务，现在则扩及了范围相当广的其他产品，已成为全球商品品种最多的网上零售商和全球第二大互联网企业，在公司名下，也包括了AlexaInternet、a9、lab126、和互联网电影数据库（Internet Movie Database，IMDB）等子公司。 亚马逊及其它销售商为客户提供数百万种独特的全新、翻新及二手商品，如图书、影视、音乐和游戏、数码下载、电子和电脑、家居园艺用品、玩具、婴幼儿用品、食品、服饰、鞋类和珠宝、健康和个人护理用品、体育及户外用品、玩具、汽车及工业产品等。</view>
    </view>
    <!-- 热门标签 -->
    <view class="hotlabels">
      <view class="hot-title col-f">热门标签</view>
      <view class="hot-nav">
        <view v-for="(item,index) in hostbqList " :key="index">
          <view class="hot-item col-f">{{item.title}}</view>
        </view>
      </view>
    </view>
    <!-- 热门文章 -->
    <view class="hottext">
      <view class="hot-title col-f">热门文章</view>
      <!-- 轮播图 -->
      <view class="hot-Item">
        <view class="ul-Img">
          <view class="li-Img"></view>
          <view class="li-text col-f">
            互联网在线第21个区块
            链数据中心点亮， ...
          </view>
          <view class="li-date col-99">2019-12-17 13:14:00</view>
        </view>
        <view class="ul-Img">
          <view class="li-Img"></view>
          <view class="li-text col-f">
            互联网在线第21个区块
            链数据中心点亮， ...
          </view>
          <view class="li-date col-99">2019-12-17 13:14:00</view>
        </view>
        <view class="ul-Img">
          <view class="li-Img"></view>
          <view class="li-text col-f">
            互联网在线第21个区块
            链数据中心点亮， ...
          </view>
          <view class="li-date col-99">2019-12-17 13:14:00</view>
        </view>
      </view>
    </view>
    <!-- 最新文章 -->
    <view class="new-text">
      <view class="new-title col-f">最新文章</view>
      <view class="xqbox">
        <view class="xq-Item">
          <view class="xq-Img">
            <image class="Imgs" src="../../static/indexImg/swiperImg.png" />
          </view>
          <view class="xq-text">
            <view class="xq-title">2019年挖矿收益盘点云算力挖矿普遍盈利</view>
            <!-- 日期 -->
            <view class="xq-bot">
              <view class="xq-date">2019-12-17 13:14:52</view>
              <view class="xq-date">1155浏览</view>
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
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      null: 5,
      hostbqList: [
        { title: "一二三四矿机" },
        { title: "一二三四矿机" },
        { title: "一二三四矿机" },
        { title: "一二三四矿机" },
        { title: "一二三四矿机" },
        { title: "一二三四矿机" }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.outerbox {
  background-color: #1d1e2f;
  .mbox {
    margin-bottom: 20px;
    padding: 0 30px;
    padding-top: 20px;
    background: #171a2c;
    .header {
      max-height: 90px;
      font-size: 32px;
    }
    .header-data {
      height: 23px;
      font-size: 23px;
      margin-top: 18px;
      margin-bottom: 38px;
      line-height: 23px;
    }
    .header-nav {
      min-height: 200px;
      text-indent: 50px;
      line-height: 1.5;
      font-family: PingFang SC;
      font-size: 26px;
      padding-bottom: 30px;
    }
  }
  .hotlabels {
    background: #171a2c;
    padding-top: 28px;
    padding: 0 30px;
    .hot-title {
      height: 35px;
      font-size: 30px;
      line-height: 35px;
    }
    .hot-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 30px;
      border-bottom: 1px solid #262a3e;
      .hot-item {
        width: 180px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #2e3045;
        margin-bottom: 20px;
        font-size: 24px;
        box-sizing: border-box;
      }
    }
  }
  // 热门文章
  .hottext {
    padding: 0 30px;
    background: #171a2c;
    padding-top: 28px;
    .hot-title {
      height: 35px;
      font-size: 30px;
      margin-bottom: 30px;
      line-height: 35px;
    }
    .hot-Item {
      display: flex;
      align-items: center;
      overflow-y: hidden;
      overflow: scroll-x;
      border-bottom: 1px solid #262a3e;
      .ul-Img {
        width: 250px;
        margin-right: 30px;
        padding-bottom: 18px;
        .li-Img {
          height: 180px;
          width: 250px;
          margin-bottom: 20px;
          border: 1px solid red;
        }
        .li-text {
          font-size: 28px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 25px;
        }
        .li-date {
          height: 19px;
          line-height: 19px;
          font-size: 24px;
        }
      }
    }
  }
  // 最新文章
  .new-text {
    padding: 0 30px;
    background: #171a2c;
    padding-top: 28px;
    padding-bottom: 30px;
    .new-title {
      height: 35px;
      font-size: 30px;
      line-height: 35px;
    }
     .xqbox {
      .xq-Item {
        display: flex;
        justify-content: space-around;
        padding: 28px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #262a3e;
        .xq-Img {
          height: 120px;
          width: 200px;
          margin-right: 30px;
          .Imgs {
            height: 120px;
            width: 200px;
          }
        }
        .xq-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .xq-title {
            max-height: 70px;
            font-size: 26px;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .xq-bot {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>