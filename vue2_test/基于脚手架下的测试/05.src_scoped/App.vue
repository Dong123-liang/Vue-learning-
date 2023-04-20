<!-- ## scoped样式
在Vue中每个组件的style样式，解析时是汇总解析的，所以会引起冲突，解析时会根据引入组件的顺序决定，后来者先上，
为了防止冲突需要在style标签中加入scoped
1. 作用：让样式在局部生效，防止冲突。
2. 写法：```<style scoped>``` -->

<template>
    <div>
        <student></student>
        <school></school>
    </div>
    </template>
    <script>
    import  student from "./components/student.vue";
    import  school from "./components/school.vue";
    export default{
        name:'app',
        components:{
            student,
            school,
        },
    }
    
    /* 执行npm run serve */
    </script>
    