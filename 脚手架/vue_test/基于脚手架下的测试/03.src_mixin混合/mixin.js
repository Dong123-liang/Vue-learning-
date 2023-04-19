const mix1 = {
    methods: {
        showName(){
            alert('你的名字是:'+this.name);
        }
    },
    mounted(){
        console.log('mixin'+this.name+'里面挂载完毕');
    }

}


const mixData ={
    data() {
        return {
            x:100,
            y:200,
        }
    },
}

export{mix1,mixData}