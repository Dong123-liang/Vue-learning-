<template>
    <div class="demo">
        <h2>欢迎来到:{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script >
    export default{
        name:"school",
        data(){
            return{
                schoolName:"西安邮电大学",
                address:'陕西西安',
            }
        }
    }
</script>
<style>
.demo{
    background-color:orange;
}
</style>