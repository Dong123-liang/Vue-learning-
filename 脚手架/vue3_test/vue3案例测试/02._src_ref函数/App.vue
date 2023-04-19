<template>
  <div>
    <h1>一个人的信息</h1>
     <h2>姓名：{{name}}</h2>
     <h2>年龄：{{age}}</h2>
     <h2>性别：{{sex}}</h2>
     <h2>工作种类：{{job.type}}</h2>
     <h2>工作薪水：{{job.salary}}</h2>
     <button @click="changeInfo">点我更改信息</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'APP',
setup(){
let name = ref('轨迹')
let age = ref(21)
let sex = ref('男')
let job = ref({
  type:'学生',
  salary:'20K'
})

function changeInfo(){
    name.value = 'Tom'
    age.value = 18
    sex.value = '女'
    job.value.type = 'UI设计师'
		job.value.salary = '60K'
    console.log(job.value)
 }
return {
				name,
				age,
        sex,
        job,
        changeInfo
			}
}
}
</script>