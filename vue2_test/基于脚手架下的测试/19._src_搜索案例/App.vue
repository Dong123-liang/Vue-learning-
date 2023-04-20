<template>
  <div>
	<UseSearch></UseSearch>
	<showList></showList>
  </div>
</template>

<script>
import showList from './components/showList.vue';
import UseSearch from './components/UseSearch.vue';
export default {
  name:'App',
  components: {showList,UseSearch},

}
</script>
