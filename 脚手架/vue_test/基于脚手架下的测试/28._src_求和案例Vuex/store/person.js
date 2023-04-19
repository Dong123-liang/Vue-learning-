import { nanoid } from 'nanoid'
import axios from 'axios'
export const personOptions={
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('addPersonList',value)
            }else{
                alert("添加的人必须姓王！")
            }
        },
        addPersonServer(context,value){
           axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
            response =>{
                context.commit('addPersonList',{id:nanoid(),name:response.data})
            },
            error=>{
                alert(error.message);
            }
           )
        }
    },
    mutations:{
    addPersonList(state,value){
        console.log(value)
        state.personList.unshift(value)
    }
},
    state:{personList:[{id:'001',name:'轨迹'}],},
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    },
}