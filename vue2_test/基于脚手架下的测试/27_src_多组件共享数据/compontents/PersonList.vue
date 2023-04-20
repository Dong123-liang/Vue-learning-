<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">SumCount组件中的求和sum值为{{$store.state.sum}}</h3>
    <input type="text" placeholder="请输入所添加的人员姓名" v-model="name" @keyup.enter="addList">
    <button @click="addList">点我添加人员</button>
    <ul><li v-for="p in personList" :key="p.id">{{p.name}}</li></ul> 
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name:'PersonList',
  data(){
    return{
        name:''
    }
  },
  computed:{
      personList(){
        return this.$store.state.personList
      }
  },
  methods:{
    addList(){
        if(this.name){
       const personObj = {id:nanoid(),name:this.name}
       this.$store.commit('addPersonList',personObj)
       this.name=''
        }else{
            alert("输入不能为空!");
        }
    }
  }
}
</script>

<style>

</style>