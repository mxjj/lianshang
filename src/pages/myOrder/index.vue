<template>
  <view class="mbox">
    <view class="content-Item" @click="typeClick(index)" v-for="(item,index) in dataList" :key="index">
      <view class="Item-left fs-32 col-f">{{item.title}}</view>
      <view class="Item-right">
          <image class="I-img" src="../../static/kuanquan/dayu.png"></image>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
        dataList:[{
            title:"云算力",
            Img:''
        },
        {
            title:"矿机租赁",
            Img:''
        },
        {
            title:"电费缴续",
            Img:''
        },
        {
            title:"云算力（抵扣电费）",
            Img:''
        }]
    };
  },
  methods:{
      typeClick(index) {
          uni.navigateTo({
              url:"./components/cloudcomputing/index"
          })
          console.log(index)
      }
  }
};
</script>
<style lang="less" scope>
.mbox {
  margin: 20px 30px;
  .content-Item {
    height: 175px;
    padding: 0 30px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-weight:bold;
    margin-bottom: 20px;
    .Item-right{
      height: 30px;
      width: 30px;
      .I-img{
          height: 30px;
          width: 30px;
      }
  }
  }
  
}
</style>