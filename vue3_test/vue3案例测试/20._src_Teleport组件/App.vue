<template>
		<div class="app">
		<h3>我是App组件（祖），{{name}}--{{price}}</h3>
		<MySon/>
	</div>
</template>

<script>
	import {provide, toRefs,reactive} from 'vue'
	import MySon from './components/MySon.vue'
	export default {
		name: 'App',
		components:{MySon},
		setup() {
			let car = reactive({name:'奔驰',price:'40W'})
			provide('car',car)//第一个参数定义名称，第二个参数为传值的变量
			return {...toRefs(car)}
		}
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>