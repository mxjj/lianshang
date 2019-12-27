<template>
	<view>
		<view class="footer">
                <view :class="'footer_item '+(item.size=='big'?'big_item':'')  " :style="'width:'+item_width" @click="change_nav(index)" v-for="(item,index) in footer_nav" :key="index">
            	<image class="footer_image" :src="index==now_index?item.select_icon:item.icon" mode="" ></image>
				<view class="foot_text">{{item.name}}</view>
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			change_nav(index){
				if (index == '2') {
					return
				} else {
				this.$store.commit("change_page",index)
				}
			}
		},
		computed:{
			item_width(){
				let length = this.$store.state.footer_store.footer_nav.length;
				switch (length){
					case 5:
						return '20%'
						break;
					default:
						break;
				}
			},
			footer_nav(){
				return this.$store.state.footer_store.footer_nav
			},
			now_index(){
				return this.$store.state.footer_store.now_page_index;
			}
		}
	}
</script>
<style  scope>
.footer{
	position: fixed;
    width: 100%;
    height: 98px;
	bottom: 0;
	left: 0;
	background-color: #161A2D;
	color: #fff;
    padding: 2px;
	z-index: 999999;
}
.footer_item{
    float: left;
	width: 33.3%;
	text-align: center;
	font-size: 26px;
	height: 98px;
}

.footer_item .footer_image {
    height: 48px;
    width: 48px;
}
.footer_item.big_item{
	position: relative;
	top: -49px;
}
.footer_item.big_item .footer_image{
	  width: 98px;
	height: 98px;
} 
</style>