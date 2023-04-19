<template>
  <div>
	<input type="text" v-model="keyWord">
	<h3>{{keyWord}}</h3>
  </div>
</template>
<script>
//实现文字显示比输入框输入内容慢n秒功能，此时需要使用customRef自定义ref补充逻辑。
import {ref,customRef} from 'vue'
export default {
	name:'HelloWorld',
	setup(){
		function myRef(value,delay){
			let timer
			return customRef((track,trigger)=>{//两个参数相当于“开关”
				return {
					get(){
						console.log(`有人从myRef这个容器中读取数据了,我把${value}给他了`)
						track()//通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
						return value
					},
					set(newValue){
						console.log(`有人把myRef这个容器中数据改为了:${newValue}`)
					    clearTimeout(timer)
						timer = setTimeout(()=>{
						value = newValue
						trigger() //通知Vue去重新解析模板，再次调用get，将新值返回出去
						},delay)
					}
			}
			})

		}
		// let keyWord = ref('hello') //使用Vue提供的ref
		let keyWord = myRef('hello',500)
		return{
			keyWord
		}
	}


}
</script>

<style>

</style>