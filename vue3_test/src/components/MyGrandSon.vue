<template>
  	<div class="son">
		<h3>我是MyGrandSon组件（孙），{{car.name}}--{{car.price}}</h3>
		<MyDialog/>
	</div>
</template>

<script>
import { inject } from 'vue';
import MyDialog from'./MyDialog.vue'
export default {
name:'MyGrandSon',
components:{MyDialog},
setup(){
    let car = inject('car')
    return {car}
}
}
</script>

<style>
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>