<template>
<Hello @hello="showHelloMsg" msg="你好啊" school="西安邮电大学">
  <template v-slot:name>
    <span>轨迹</span>
  </template>
  <template>
    <span>
      西安邮电大学
    </span>
  </template>
</Hello>
</template>

<script>
import Hello from './components/HelloWorld.vue'
export default {
  name:'App',
  components:{Hello},
  setup(){
    function showHelloMsg(value){
      alert(`你好啊，你触发了hello事件,我收到的参数是:${value}`)
    }
    return{
      showHelloMsg
    }
  }
}
</script>