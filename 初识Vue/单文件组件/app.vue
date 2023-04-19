<template>
<div>
    <student></student>
    <school></school>
</div>
</template>
<script>
import  student from "./student.vue";
import  school from "./school.vue"
export default{
    name:'app',
    components:{
        student,
        school,
    }
}
</script>