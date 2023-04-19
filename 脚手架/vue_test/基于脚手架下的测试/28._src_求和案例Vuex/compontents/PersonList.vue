<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">SumCount组件中的求和sum值为{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入所添加的人员姓名" v-model="name" @keyup.enter="addList">
    <button @click="addList">点我添加人员</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">点我随机添加一个人</button>
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
        return this.$store.state.personAbout.personList
      },
      sum(){
        return this.$store.state.countAbout.sum
      },
      firstPersonName(){
        return this.$store.getters['personAbout/firstPersonName']
      }
  },
  methods:{
    addList(){
        if(this.name){
       const personObj = {id:nanoid(),name:this.name}
       this.$store.commit('personAbout/addPersonList',personObj)
       this.name=''
        }else{
            alert("输入不能为空!");
        }
    },
    addWang(){
      const personObj ={id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.name=''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer');
    }
  
  }
}
</script>

<style>

</style>