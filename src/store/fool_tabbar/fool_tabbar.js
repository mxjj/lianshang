export default {
	state:{
		footer_nav:[
			{
				name:'首页',
				name_code:'home',
				icon:'../../static/tabBar-icon/index.png',
				select_icon:'../../static/tabBar-icon/index-h.png',
				size:'small'
			},
			{
				name:'资讯',
				name_code:'zixun',
				icon:'../../static/tabBar-icon/zixun.png',
				select_icon:'../../static/tabBar-icon/zixun-h.png',
				size:'small'
			},
			{
				name:'算力',
				name_code:'pertolcs',
				icon:'../../static/tabBar-icon/suanli.png',
				select_icon:'../../static/tabBar-icon/suanli.png',
				size:'big'
			},
			{
				name:'矿圈',
				name_code:'kqPage',
				icon:'../../static/tabBar-icon/kuanquan.png',
				select_icon:'../../static/tabBar-icon/kuanquan-h.png',
				size:'small'
			},
			{
				name:'我的',
				name_code:'my',
				icon:'../../static/tabBar-icon/myImg.png',
				select_icon:'../../static/tabBar-icon/myImg-h.png',
				size:'small'
			},
			
		],
		now_page_index:0
	},
	mutations:{
		change_nav_list(state,data){
			state.footer_nav = data;
		},
		change_page(state,index){
			state.now_page_index = index;
		}
		
	}
}