<template>
  <ul class="todo-main">
    <MyiItem v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todos="todoObj" 
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
    ></MyiItem>
  </ul>
</template>

<script>
//todoObj为遍历todos数组每一个的当前值
import MyiItem from './MyiItem.vue';
export default {
name:'MyList',
components:{MyiItem},
props:['todos','checkTodo','deleteTodo'],
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>