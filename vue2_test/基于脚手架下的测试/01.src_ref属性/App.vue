<template>
<div>
    <h2 v-text="msg" ref="tilte"></h2>
     <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <student ref="stu"></student>
</div>
</template>
<script>
import  student from "./components/student.vue";
export default{
    name:'app',
    components:{
        student,
    },
    data() {
        return {
            msg:'轨迹',
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs);//此处的this指向的是APP组件下的VueComponent。
            console.log(this.$refs.tilte);
            console.log(this.$refs.btn);
            console.log(this.$refs.stu);
        }
    }
}

/* 执行npm run serve */
</script>
