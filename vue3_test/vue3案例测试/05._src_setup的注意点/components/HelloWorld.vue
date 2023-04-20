<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>学校:{{ school }}</h2>
    <h2>信息：{{ msg }}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
    <slot name="name"></slot>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name:'HelloWorld',
  props:['msg','school'],
  emits:['hello'],
setup(props,context){
  			console.log('---setup---',props)
			console.log('---setup---',context)
			console.log('---setup---',context.attrs) //相当与Vue2中的$attrs
			console.log('---setup---',context.emit) //触发自定义事件的。
  console.log('---setup---',context.slots) //插槽
			//数据
			let person = reactive({
				name:'张三',
				age:18
			})
      function test(){
				context.emit('hello','轨迹')
			}

			//返回一个对象（常用）
			return {
				person,
				test
			}
		}
}
</script>

<style>

</style>