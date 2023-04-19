import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const actions={
   jia(context,value){
    console.log('actions中的jia被调用了',context,value);
    context.commit('JIA',value);
   },
   Jian(context,value){
    context.commit('JIAN',value);
   },
   jiaOdd(context,value){
    if(context.state.sum%2){
        context.commit('JIA',value);
    }
   },
   jiaWait(context,value){
    setTimeout(()=>{
        context.commit('JIA',value);
    },3000)
}
}

const mutations={
JIA(state,value){
    console.log('mutations中的JIA被调用了',state,value)
    state.sum += value
},
JIAN(state,value){
    state.sum -=value
},
addPersonList(state,value){
    console.log(value)
    state.personList.unshift(value)
}
}
//准备state——用于存储数据
const state = {
sum:0,//当前的和
school:'西安邮电大学',
subject:'前端',
personList:[{id:'001',name:'轨迹'}],
}

const getters = {
	bigSum(state){
		return state.sum*10
	}
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
