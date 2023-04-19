//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
// import vueResource from 'vue-resource'
//引入store
// import store from './store'

import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
// Vue.use(vueResource)
Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
/* 	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
 	mounted(){
      setTimeout(()=>{
		this.$destroy()
	  },3000)//利用定时器进行销毁
	}  */
})