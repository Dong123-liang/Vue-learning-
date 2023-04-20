<template> 
    <div class="demo">
<h1>{{msg}}</h1>
<h2>学校姓名：{{schoolName}}</h2>
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
 
    }
</script>


<style scoped>
.demo{
    background-color:orange;
}

</style>
