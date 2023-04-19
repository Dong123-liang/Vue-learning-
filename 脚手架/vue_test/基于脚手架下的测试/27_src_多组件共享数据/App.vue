<template>
    <div>
      <SumCount></SumCount>
      <hr>
    <PersonList></PersonList>
    </div>
  </template>
  
  <script>
  import SumCount from './components/SumCount.vue';
  import PersonList from './components/PersonList.vue'
  export default {
    name:'App',
    components: { SumCount,PersonList},
  
  }
  </script>