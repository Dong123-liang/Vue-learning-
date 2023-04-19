import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
import {personOptions} from './person'
import countOptions from './count'
Vue.use(Vuex)

export default new Vuex.Store({

	modules:{
		countAbout:countOptions,
		personAbout:personOptions
	}
})

