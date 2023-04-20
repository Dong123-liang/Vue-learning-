<template>
<div class="todo-container">
    <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
    </div>
</div>
</template>
<script>

import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  name:'APP',
  components:{
    MyHeader,
    MyList,
    MyFooter
  },
  data(){
   return {
    //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
 /*    todos:[
    {id:'001',name:'轨迹',done:true},
    {id:'002',name:'小明',done:false},
    {id:'003',name:'李华',done:true}]
    */
    todos:JSON.parse(localStorage.getItem('todos'))||[],
   } 
},
  methods:{
    //添
    addTodo(todoObj){
  this.todos.unshift(todoObj);
  // console.log(todos)
},
//在数组中改便当前的done
  checkTodo(id){
    this.todos.forEach((todo)=>{
    if(todo.id === id) todo.done = !todo.done;
    })
  },
  //在数组中删除
  deleteTodo(id){
    this.todos=this.todos.filter((todo)=>{
      return todo.id!== id;
    })
  },
  //将全选按钮的done值赋给数组的每一位
  checkAllTodo(value){
   this.todos.forEach((todo)=>{todo.done=value})
  },
  //清除所有选中的iItem
  clearAllTodo(){
   this.todos=this.todos.filter(todo => {
   return !todo.done})
  }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value));
        }
      }
    }
  }
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
