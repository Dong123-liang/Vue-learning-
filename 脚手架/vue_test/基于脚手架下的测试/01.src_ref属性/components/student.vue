<template>
<div>
<h2>学生姓名：{{studentName}}</h2>
<h2>学生年龄：{{age}}</h2>
</div>
</template>
<script>
    export default{
        name:'StudentName',
        data() {
            return {
                studentName:'轨迹',
                age:21,
            }
        },

    }
</script>
