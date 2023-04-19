<template> 
    <div class="demo">
<h2>学校姓名：{{schoolName}}</h2>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
    export default{
        name:'schoolName',
        data() {
            return {
                schoolName:'西安邮电大学',
                name:'西安邮电大学',
            }
        },
        mounted(){
/*             this.$bus.$on('sendStuName',(data)=>{
                console.log('我是School组件，收到了数据',data);
            }) */
            this.pubId = pubsub.subscribe('hello',(msgName,data)=>{//订阅消息
                /* console.log(this);//如果回调函数写的不是箭头函数而是普通函数，this的指向为undefined(因为调用了第三方库) */
                console.log('student组件发布了hello消息,hello消息的回调执行了',msgName,data)
            })
        },
        beforeDestroy(){
          /* this.$bus.$off('hello'); */
          pubsub.unsubscribe(this.pubId);  
        }
 
    }
</script>


<style scoped>
.demo{
    background-color:orange;
}

</style>
