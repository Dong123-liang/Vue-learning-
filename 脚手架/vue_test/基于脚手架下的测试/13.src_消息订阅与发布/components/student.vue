<template> 
    <div class="demo">
<h2 class="demo-tilte">学生姓名:{{studentName}}</h2>
<h2>学生性别：{{sex}}</h2>
<button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'

    export default{
        name:'studentName',
        data() {
            return {
                studentName:'轨迹',
                name:'轨迹',
                sex:'男',
            }
        },
        methods:{
            sendStudentName(){
               /*  this.$bus.$emit('sendStuName',this.name,123,333) */
               pubsub.publish('hello',123);//发布消息
            },
        }
            
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