<template>
  <div>
    <h1>一个人的信息</h1>
	姓:<input type="text" v-model="person.firstName">
	<br>
	名:<input type="text" v-model="person.lastName">
	<br>
	<span>全名:{{ person.fullName }}</span>
  </div>
</template>

<script>
import {reactive,computed} from 'vue'
export default {
  name:'HelloWorld',
  props:['msg','school'],
  setup(){
	let person = reactive({
   firstName:'轨',
   lastName:'迹'
	})
	person.fullName = computed({
		get(){
			return  person.firstName + '-' + person.lastName
		},
		set(value){
           const nameArr = value.split('-')
		   person.firstName = nameArr[0]
		   person.lastName = nameArr[1]
		}
	})
	return {
		person
	}
  }
}
</script>

<style>

</style>