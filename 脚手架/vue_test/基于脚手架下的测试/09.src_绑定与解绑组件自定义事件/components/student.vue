<template> 
    <div class="demo">
<h1>{{msg}}</h1>
<h2 class="demo-tilte">学生姓名：{{studentName}}</h2>
<h2>当前求和为：{{number}}</h2>
<button @click="add">点我number++</button>
<button @click="sendStudentName">学生姓名发送给APP</button>
<button @click="unbind">点我解绑自定义sendStuName事件</button>
<button @click="death">点我销毁Studen组件的实例(vc)</button>
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
                number:0,
            }
        },
        methods:{
            sendStudentName(){
                this.$emit('sendStuName',this.name,123,333)//$emit绑定的事件名称应该与父组件传来的一致，可以传多个参数，也可以赋值给对象统一传参
            },
            add(){
                this.number++;
                console.log(this.number)
            },
            unbind(){
                this.$off('sendStuName')
                // this.$off(['atguigu','demo']) //解绑多个自定义事件
				// this.$off() //解绑所有的自定义事件
            },
            death(){
                this.$destroy()
            }
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