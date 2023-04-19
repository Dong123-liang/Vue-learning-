<template> 
    <div>
<h1>{{msg}}</h1>
<h2>学校姓名：{{schoolName}}</h2>
<button @click="showName">点我显示学校名字</button>
    </div>
</template>
<script>
  import  {mix1,mixData} from '../mixin'
    export default{
        name:'schoolName',
        data() {
            return {
                msg:'西安邮电大学',
                schoolName:'西安邮电大学',
                name:'西安邮电大学',
            }
        },
        mixins:[mix1,mixData],//此处为默认mixins属性调用公共配置,记得加s。
            
    }
</script>

