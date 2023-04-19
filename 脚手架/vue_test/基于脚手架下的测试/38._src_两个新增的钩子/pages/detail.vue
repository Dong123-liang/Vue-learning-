<template>
  	<ul>
		<li>消息编号：{{id}}</li>
		<li>消息标题：{{title}}</li>
		<li>{{a}}</li>
		<li>{{name}}</li>
	</ul>
</template>

<script>
export default {
 name:'UseDetail',
 props:['id','title','a','name'],
 mounted(){
    console.log(this.$route);
 }
}
</script>

<style>

</style>