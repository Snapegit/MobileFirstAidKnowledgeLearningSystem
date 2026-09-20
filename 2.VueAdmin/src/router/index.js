	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import address from '@/views/address/list'
	import examquestion from '@/views/exam/examquestion/list'
	import shangpinxinxi from '@/views/shangpinxinxi/list'
	import exampaper from '@/views/exampaper/list'
	import storeup from '@/views/storeup/list'
	import cart from '@/views/cart/list'
	import discussjijiukecheng from '@/views/discussjijiukecheng/list'
	import kechengfenlei from '@/views/kechengfenlei/list'
	import yonghu from '@/views/yonghu/list'
	import shangpinfenlei from '@/views/shangpinfenlei/list'
	import discussshangpinxinxi from '@/views/discussshangpinxinxi/list'
	import orders from '@/views/orders/list'
	import config from '@/views/config/list'
	import jijiukecheng from '@/views/jijiukecheng/list'
	import exampaperlist from '@/views/exam/exampaperlist/list'
	import examination from '@/views/exam/exampaperlist/examination'
	import examrecord from '@/views/exam/examrecord/list'
	import examfailrecord from '@/views/exam/examfailrecord/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '系统公告',
			component: news
		}
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/examquestion',
			name: '题库信息',
			component: examquestion
		}
		,{
			path: '/shangpinxinxi',
			name: '商品信息',
			component: shangpinxinxi
		}
		,{
			path: '/exampaper',
			name: '试卷列表',
			component: exampaper
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/cart',
			name: '购物车',
			component: cart
		}
		,{
			path: '/discussjijiukecheng',
			name: '急救课程评论',
			component: discussjijiukecheng
		}
		,{
			path: '/kechengfenlei',
			name: '课程分类',
			component: kechengfenlei
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/shangpinfenlei',
			name: '商品分类',
			component: shangpinfenlei
		}
		,{
			path: '/discussshangpinxinxi',
			name: '商品信息评论',
			component: discussshangpinxinxi
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/jijiukecheng',
			name: '急救课程',
			component: jijiukecheng
		}
		, {
			path: '/exampaperlist',
			name: '考试列表',
			component: exampaperlist
		}, {
			path: '/examrecord',
			name: '考试记录',
			component: examrecord
		}, {
			path: '/examfailrecord',
			name: '错题本',
			component: examfailrecord
		}
		]
	},
	{
		path: '/examination',
		name: '考试',
		component: examination
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
