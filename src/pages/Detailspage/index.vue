<template>
  <!-- 商品详情页 -->
  <view class="partbox">
    <!-- <view class="part-nav">
      <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>
    </view> -->
    <view class="content-box">
      <!-- 图片 -->
      <view class="nav-Img">
        <image class="m-Img" src="../../static/indexImg/swiperImg.png" />
      </view>
      <!-- 详情 -->
      <view class="nav-a">
        <!-- 标题 -->
        <view class="nav-title">
          <view class="title-left">神马矿机M20S(1台)</view>
          <view class="title-right">
            <view class="t-tj" style="background:#CC635B;">特价</view>
            <view class="t-tj" style="margin:0 5px;background:#EC6430;">热卖</view>
            <view class="t-tj" style="background:#6BD596;">限时</view>
          </view>
        </view>
        <!-- 第一部分 -->
        <view>
          <view class="nav-powe">
            <view class="powe-a">功耗</view>
            <view class="powe-b">3.7kw/h x1台</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">电费</view>
            <view class="powe-b">0.35元/度</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">算力</view>
            <view class="powe-b">65TH/s x1台</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">预计日收益</view>
            <view class="powe-b">0.0012623BTC/份</view>
          </view>
          <!-- 计算数量 -->
          <view class="nav-number">
            <view class="powe-a">数量</view>
            <view class="nav-price">
              ￥22332.0
              <view class="nav-matr">
                <view class="matr-minus">-</view>
                <view class="matr-text">22332</view>
                <view class="matr-minus">+</view>
              </view>
            </view>
            <!-- 加减 -->
          </view>
          <!-- 阅读详情 -->
          <view class="nav-xieyi">
            <!-- 绑定值 :checked="item.checked"-->
            <checkbox class="checkbox" />
            <view class="consent">
              <view class="c-text">我已阅读并同意</view>
              <view class="r-text">《矿机租赁服务合同》</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 第二部分  规格参数-->
      <view class="nav-b">
        <view class="nav-title">
          <view class="title-left">规格参数</view>
        </view>
        <view>
          <view class="nav-powe">
            <view class="powe-a">算力类型</view>
            <view class="powe-b">3.7kw/h x1台</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">算力大小</view>
            <view class="powe-b">0.35元/度</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">算力价格</view>
            <view class="powe-b">65TH/s x1台</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">预计日产出</view>
            <view class="powe-b">0.0012623BTC/份</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">期限</view>
            <view class="powe-b">0.0012623BTC/份</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">电费</view>
            <view class="powe-b">包含一年电费</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">管理费</view>
            <view class="powe-b">6%</view>
          </view>
          <view class="nav-powe">
            <view class="powe-a">上架时间</view>
            <view class="powe-b">0.0012623BTC/份</view>
          </view>
        </view>
      </view>
      <!-- 产品详情 -->
    </view>
    <view class="foor">
      <product />
      <view class="buttom">
        <view class="f-btn" @click="addClick">立即购买</view>
      </view>
    </view>
  </view>
</template>
<script>
import uniNavBar from "../components/callblock/uni-nav-bar/uni-nav-bar";
import product from "./components/productItem/produc";
export default {
  components: {
    uniNavBar,
    product
  },
  data() {
    return {};
  },
  methods: {
    addClick() {
      console.log('跳转')
    }
  }
};
</script>
<style lang="less">
.partbox {
  background-color: #1d1e2f;
  .content-box {
    .nav-Img {
      height: 375px;
      .m-Img {
        height: 375px;
        width: 100%;
      }
    }
    .nav-a {
      padding: 0 30px;
      margin-bottom: 20px;
      background-color: #171a2c;
      .nav-title {
        height: 50px;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .title-left {
          font-size: 26px;
          color: #fff;
          letter-spacing: 2px;
        }
        .title-right {
          display: flex;
          color: #fff;
          .t-tj {
            height: 30px;
            font-size: 14px;
            width: 60px;
            line-height: 30px;
            text-align: center;
          }
        }
      }
      .powe-a {
        width: 160px;
        font-size: 22px;
        color: #999999;
      }
      .nav-number {
        display: flex;
        .nav-price {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6bd596;
          font-size: 24px;
          font-weight: 600;
          .nav-matr {
            display: flex;
            .matr-text {
              margin: 0 6px;
            }
            .matr-minus {
              height: 30px;
              line-height: 30px;
              text-align: center;
              color: #fff;
              background-color: #ec6430;
              width: 50px;
            }
          }
        }
      }
      .nav-xieyi {
        height: 60px;
        display: flex;
        align-items: center;
        .consent {
          display: flex;
          margin-left: 18px;
          font-size: 18px;
          .c-text {
            color: #999999;
            margin-right: 5px;
          }
          .r-text {
            color: #51c0ff;
          }
        }
      }
    }
    .nav-b {
      padding: 20px 30px;
      margin-bottom: 20px;
      background-color: #171a2c;
      .nav-title {
        height: 50px;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .title-left {
          font-size: 26px;
          color: #fff;
          letter-spacing: 2px;
        }
      }
      .powe-a {
        width: 160px;
        font-size: 22px;
        color: #999999;
      }
    }
    .nav-powe {
      height: 40px;
      line-height: 40px;
      text-align: left;
      display: flex;
      margin-bottom: 10px;
      .powe-b {
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
  .foor {
    .buttom {
      height: 100px;
      line-height: 100px;
      padding: 0 95px;
      text-align: center;
      background-color: #171a2c;
      .f-btn {
        height: 72px;
        line-height: 72px;
        text-align: center;
        background-color: #6bd596;
        color: #fff;
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
}
</style>