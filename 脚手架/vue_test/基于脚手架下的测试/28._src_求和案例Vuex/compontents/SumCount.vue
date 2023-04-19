<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3 style="color:red">PersonList组件中列表的长度为{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>

import { mapState,mapGetters, mapMutations, mapActions } from 'vuex'
export default {
 name:'SumCount',
 data() {
    return {
        n:1
    }
 },

 computed:{
// ...mapState({he:'sum',school:'xuexiao',xueke:'subject'}),
...mapState('countAbout',['sum','school','subject']),
...mapGetters('countAbout',['bigSum']),
/* listLength(){ 
    return this.$store.state.personList.length
 }, */
 ...mapState('personAbout',['personList'])
},
 methods:{
/*    increment(){
        this.$store.commit('JIA',this.n)
        // this.$store.dispatch('jia',this.n);
    },
    decrement(){
        this.$store.commit('JIAN',this.n)
    }, */

    ...mapMutations('countAbout',{increment:"JIA",decrement:"JIAN"}),
/*     incrementOdd(){
        this.$store.dispatch('jiaOdd',this.n)
    },

    incrementWait(){
        this.$store.dispatch('jiaWait',this.n)
    } */
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
 },
/*  mounted(){
    const x =mapState({he:'sum',school:'xuexiao',xueke:'subject'})
    console.log(x)
 } */
}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>