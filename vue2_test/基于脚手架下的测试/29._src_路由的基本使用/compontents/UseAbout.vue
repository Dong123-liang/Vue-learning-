<template>
    <h2>我是About组件的内容</h2>
  </template>
  
  <script>
  export default {
   name:'UseAbout',
   mounted(){
    window.UseAboutRoute = this.$route;
    window.UseAboutRouter = this.$router;
    }
  }
  </script>