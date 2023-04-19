<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear><!-- 添加appear属性，默认页面一加载时可以执行动画 -->
       <h1 v-show="isShow">Hello 轨迹</h1>
    </transition>
  </div>
</template>

<script>
export default {
name:'UseAnimation',
data(){
  return {
    isShow:true,
  }
}
}
</script>

<style scoped>
h1{
  background-color:red;
}
.v-enter-active{
  animation:move 0.5s linear;
}
.v-leave-active{
  animation:move 0.5s linear reverse;
}
@keyframes move{
  from{
    transform: translateX(-100%);
  }to{
    transform: translateX(0px);
  }
}

</style>