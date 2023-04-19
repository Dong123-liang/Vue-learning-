<template>
  <div>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg+= '!'">修改信息</button>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>学校：{{person.student.school.adrress}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.student.school.adrress += 6">修改学校信息</button>
  </div>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
  name:'HelloWorld',
  setup(){

	let sum = ref(0)
	let msg = ref('hello world')
	let person = reactive({
   name:'轨迹',
   age:21,
   student:{
	school:{
		adrress:'西安邮电大学'
	}
   }
	})
	//情况一：监视ref所定义的一个响应式数据
/*       watch(sum,(newValue,oldValue)=>{
		console.log('sum变了',newValue,oldValue)		
	  },{immediate:true}) */

     //情况二：监视ref所定义的多个响应式数据
/* 	 watch([sum,msg],(newValue,oldValue)=>{
				console.log('sum或msg变了',newValue,oldValue)
			},{immediate:true}) */

/* 
	情况三：监视reactive所定义的一个响应式数据的全部属性
						1.注意：此处无法正确的获取oldValue
						2.注意：强制开启了深度监视（deep配置无效）
			*/
/* 	watch(person,(newValue,oldValue)=>{
				console.log('person变化了',newValue,oldValue)//此处无法正确的获取oldValue
			},{deep:false}) //此处的deep配置无效  */

//情况四：监视reactive所定义的一个响应式数据中的某个属性 , 此时是可以获取正确的oldvalue
	/* 	watch(()=>person.name,(newValue,oldValue)=>{
				console.log('person的name变化了',newValue,oldValue)
			})  */
//情况五：监视reactive所定义的一个响应式数据中的某些属性,此时是可以获取正确的oldvalue
/*  watch(()=>[person.name,person.age],(newValue,oldValue)=>{
				console.log('person的name或age变化了',newValue,oldValue)
			})  */
//特殊情况
watch(()=>person.student,(newValue,oldValue)=>{
		console.log('person的student变化了',newValue,oldValue)//此处无法正确的获取oldValue
		},{deep:true}) //此处由于监视的是reactive元素定义的对象中的某个属性，所以需要deep配置、

		
/* 
小坑:监视reactive所定义的一个响应式数据的全部属性时.无法正确的获取oldValue,强制开启了深度监视(deep配置无效).
相当于当reactive所监视的数据以对象形式时,oldValue值无法正常获取,且监视的为数据对象中具体某一对象属性时,此时deep配置有效,可以手动开启. */
		
	return {
		person,
		sum,
		msg,
	}
  }
}
</script>

<style>

</style>