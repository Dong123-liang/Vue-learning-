<template>
          <li>
          <label>
            <input type="checkbox" :checked='todos.done' @click="handleCheck(todos.id)"/>
            <span v-text="todos.name"></span>
          </label>
          <button class="btn btn-danger"  @click="handleDelete(todos.id)">删除</button>
        </li>
</template>

<script>
export default {
name:'MyiItem',
props:['checkTodo','todos','deleteTodo'],
methods:{
  //勾选或者取消勾选
handleCheck(id){
   this.checkTodo(id);
   //通知App组件将对应的todo对象的done值取反
  //  console.log(this.todos)
},
//删除
 handleDelete(id){
   if(confirm('确定删除吗？')){
    this.deleteTodo(id);
   }  
} 
}

}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: pink;
}
li:hover button{
  display: block;
}
</style>