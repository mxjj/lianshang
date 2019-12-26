<template>
  <view class="content">
    <view class="title">产品详情</view>
    <view class="mbox" >
      <view class="nav-text" v-for="(item,index) in dataList" :key="index">
        <view class="text-title">{{item.title}}</view>
        <p class="text-nav">{{item.nav}}</p>
      </view>
      <view style="font-size:14px;color:#999999;font-weight:550;">本平台对本合约条款保留最终解释权</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: "1、购买须知",
          nav:
            "会员下单前，请认真了解产品，不清楚的可以咨询客服，一经下单，表示已认可本产品，概不退款。"
        },
        {
          title: "2、算力产出",
          nav:
            "算力挖矿产出可参考蚂蚁矿池 https://www.antpool.com/support.htm?m=calculator"
        },
        {
          title: "3、产出结算",
          nav:
            "预估产出由数字资产网络实际运行计算得出，将动态变化，仅供参考；合约产出按每分钟记录，每日在北京时间14:00点结算昨日的合约产出，按天（24h）发放。累计收益达到平台规定的标准方可提取。"
        },
        {
          title: "4、合同终止",
          nav: "合同到期后自动终止，提前终止不退款，谢谢理解。"
        },
        {
          title: "5、风险提示",
          nav:
            "数字资产价格经常发生大幅波动，另外每个币种的挖矿难度会定时调整。币价下跌或难度上涨，都会导致每份算力机挖矿合约的收益降低。不管是从数字资产还是法币角度，本挖矿合约不保证用户能够回本。用户需要仔细评估自己的风险承受能力，在可接受的风控范围内投资数字资产挖矿。"
        }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.content {
  padding: 20px 30px;
  margin-bottom: 20px;
  background-color: #171a2c;
  .title {
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    font-size: 26px;
    color: #fff;
    letter-spacing: 2px;
  }
  .nav-text {
    margin-bottom: 40px;
    .text-title {
      line-height: 60px;
      height: 60px;
      font-size: 25px;
      color: #999999;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }
    .text-nav {
      min-height: 50px;
      font-size: 23px;
      line-height: 1.5;
      color: #999999;
      letter-spacing: 1px;
    }
  }
}
</style>