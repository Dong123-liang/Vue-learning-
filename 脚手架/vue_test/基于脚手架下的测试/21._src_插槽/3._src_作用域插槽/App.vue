<template>
	<div class="container">
		<UseCategory title="游戏" >
      <template scope="Guiji"> <!-- scope接收子组件传过来的数据 -->
        <ul>
				<li v-for="(g,index) in Guiji.games" :key="index">{{g}}</li><!-- 生成的是ul列表 -->
			</ul>
      </template>
		</UseCategory>
    <UseCategory title="游戏" >
      <template scope="{games}"> <!-- scope接收子组件传过来的数据，使用ES6语法直接接收 -->
        <ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
      </template>
		</UseCategory>
    <UseCategory title="游戏" >
      <template scope="{games}"> <!-- scope接收子组件传过来的数据，使用ES6语法直接接收 -->
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4><!-- 生成的是h4标题 -->
      </template>
		</UseCategory>
	</div>
</template>

<script>
import UseCategory from './components/UseCategory.vue';
export default {
  name:'App',
  components: {UseCategory},

}
</script>
<style scoped>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>