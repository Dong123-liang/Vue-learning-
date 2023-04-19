<template>
  <div>
    <h1>一个人的信息</h1>
     <h2>姓名：{{person.name}}</h2>
     <h2>年龄：{{person.age}}</h2>
     <h2>性别：{{person.sex}}</h2>
     <h2>工作种类：{{person.job.type}}</h2>
     <h2>工作薪水：{{person.job.salary}}</h2>
     <h3>爱好：{{person.hobby}}</h3>
	<h3>测试的数据c:{{person.job.a.b.c}}</h3>
     <button @click="changeInfo">点我更改信息</button>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name:'APP',
setup(){
  let person = reactive({
  name:'轨迹',
  age:18,
  job:{
    type:'前端工程师',
    salary:'20K',
    a:{
      b:{
        c:666
      }
    }
  },
  hobby:['抽烟','喝酒','烫头']
  })

function changeInfo(){
    person.name = 'Tom'
    person.age = 18
    person.sex = '女'
    person.job.type = 'UI设计师'
		person.job.salary = '60K'
    person.job.a.b.c = 999
		person.hobby[0] = '学习'

 }
return {
        person,
        changeInfo
			}
}
}
</script>