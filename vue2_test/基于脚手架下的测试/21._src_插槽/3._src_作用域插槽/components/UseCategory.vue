<!-- 3. 作用域插槽：

      1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

      2. 具体编码：

         ```vue
         父组件中：
         		<Category>
         			<template scope="scopeData">
         				//生成的是ul列表
         				<ul>
         					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
         				</ul>
         			</template>
         		</Category>
         
         		<Category>
         			<template slot-scope="scopeData">
         				//生成的是h4标题
         				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
         			</template>
         		</Category>
         子组件中：
                 <template>
                     <div>
                         <slot :games="games"></slot>
                     </div>
                 </template>
         		
                 <script>
                     export default {
                         name:'Category',
                         props:['title'],
                         //数据在子组件自身
                         data() {
                             return {
                                 games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                             }
                         },
                     }
                 </script>
         ```
   ``` -->

<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games" msg="hello">我是默认插槽，当使用者没有传递具体结构时候,我会出现1</slot>
    <!-- 用games绑定发送的数据 -->
  </div>
</template>

<script>
export default {
  name:'*UseCategory',
  props:['title'],
  data(){
    return{
        games:['红色警戒','穿越火线','劲舞团','超级玛丽']
    }
  }
}
</script>

<style>
.category{
    background-color: rgb(160, 160, 240);
    width: 200px;
    height: 300px;
}
h3{
    background: pink;
    text-align: center;
}
video{
width: 100%;
}
img{
    width: 100%;
}
</style>