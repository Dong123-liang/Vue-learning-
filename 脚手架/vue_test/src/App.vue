<template>
  <div>
    <div class="row">
    <UseBanner></UseBanner>
    <UseAnimation2></UseAnimation2>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
					<router-link class="list-group-item" active-class="active" to="/About">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/Home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UseBanner from './components/UseBanner.vue'
import UseAnimation2 from './components/UseAnimation1.vue';
export default {
  name:'App',
  components:{UseAnimation2},

}
</script>