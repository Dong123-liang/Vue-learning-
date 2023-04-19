<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord" @keyup.enter="searchUsers"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
export default {
name:'UseSearch',
data(){
  return {
    keyWord:''
  }
},
methods:{
  searchUsers(){
    //每次请求前更新数据
      this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false});
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response=>{
          console.log("请求成功",response.data.items)
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items});

      },
      error =>{
        console.log("请求失败",{isLoading:false,errMsg:error.message,users:[]})
        // this.$bus.$emit('updateListData')
      }
      )
  }
}
}
</script>

<style>

</style>