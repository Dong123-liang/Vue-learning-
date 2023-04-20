<template>
    <div>
        <student name="轨迹" sex="男" :age="21"></student><!-- 给age添加动态绑定v-bind,将其值变为表达式，可以直接计算值防止字符串拼接 -->
    </div>
    </template>
    <script>
    import  student from "./components/student.vue";
    export default{
        name:'app',
        components:{
            student,
        },
    }
    
    /* 执行npm run serve */
    </script>
    