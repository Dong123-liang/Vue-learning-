<template>
  <h2>我是Home组件的内容</h2>
</template>

<script>
export default {
 name:'UseHome',
 mounted(){
    window.UseHomeRoute = this.$route;
    window.UseHomeRouter = this.$router;
    }
}
</script>