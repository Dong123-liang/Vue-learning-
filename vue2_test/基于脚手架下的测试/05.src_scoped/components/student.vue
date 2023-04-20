<template> 
    <div class="demo">
<h1>{{msg}}</h1>
<h2 class="demo-tilte">学生姓名：{{studentName}}</h2>
    </div>
</template>
<script>
    export default{
        name:'studentName',
        data() {
            return {
                msg:'轨迹',
                studentName:'轨迹',
                name:'轨迹',
                x:300,
            }
        },
            
    }
</script>

<style lang="less" scoped> //将style样式写为less样式解析，下载插件npm i less loadeer
.demo{
    background-color: red;
    .demo-tilte{
        color: aqua;
    }
}
</style>