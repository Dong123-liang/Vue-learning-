<template>
  	<div class="child">
		<h3>我是MySon组件（儿子）</h3>
		<MyGrandSon/>
	</div>
</template>

<script>
import MyGrandSon from './MyGrandSon.vue';

export default {
    name:'MySon',
    components: { MyGrandSon },
    /* setup(){
			let x = inject('car')
			console.log(x,'Child-----')
	} */
}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>