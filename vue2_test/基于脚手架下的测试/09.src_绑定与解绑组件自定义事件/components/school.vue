<template> 
    <div class="demo">
<h1>{{msg}}</h1>
<h2>学校姓名：{{schoolName}}</h2>
<button @click="schName">点我显示学校名称</button>
    </div>
</template>
<script>
    export default{
        name:'schoolName',
        data() {
            return {
                msg:'西安邮电大学',
                schoolName:'西安邮电大学',
                name:'西安邮电大学',
            }
        },
        props:['getSchoolName'],
        methods:{
            schName(){
               this.getSchoolName(this.name);
            }
        }
 
    }
</script>


<style scoped>
.demo{
    background-color:orange;
}

</style>
