<template>
  <div>
    <h2>我是Home组件的内容</h2>
    <div>
      <ul class="nav nav-tabs">
         <li>
              <router-link class="list-group-item" active-class="active" to="/Home/News">News</router-link>
         </li>
         <li>
          <router-link class="list-group-item" active-class="active" to="/Home/Message">Message</router-link>
         </li>
      </ul>
      <keep-alive include="UseNews"> <!-- include后面跟的是所需要缓存的组件名称,不添加默认为缓存当下所有组件的内容 -->
      <!-- <keep-alive :include="[组件1,组件2,组件3]"></keep-alive> 缓存多个所需组件采用数组形式-->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
 name:'UseHome',
}
</script>