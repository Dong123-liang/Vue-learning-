<template>
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">go跳转几步</button>
      </div>
</template>

<script>
export default {
   name:'UseBanner',
   methods:{
    back(){
      this.$router.back();
      console.log(this.$router)
    },
    forward(){
      this.$router.forward();
    },
    go(){
      this.$router.go(3);
    }
   }
}
</script>

<style>

</style>