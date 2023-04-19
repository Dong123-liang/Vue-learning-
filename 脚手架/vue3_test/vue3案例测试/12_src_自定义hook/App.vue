<template>
	<div>
	<button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
	<Demo v-if="isShowDemo"/>
	<hr>
	<TestPoint/>
	</div>
</template>

<script>
	import {ref} from 'vue'
	import Demo from './components/Demo'
	import TestPoint from './components/Test'
	export default {
		name: 'App',
		components:{Demo,TestPoint},
		setup() {
			let isShowDemo = ref(true)
			return {isShowDemo}
		}
	}
</script>

