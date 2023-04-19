<!-- ## mixin(混入)

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

    第一步定义混合：

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    第二步使用混入：

    全局混入：```Vue.mixin(xxx)```可以放入mian.js文件中进行全局混合//Vue.mixin(hunhe);Vue.mixin(hunhe2)
    全部混入：```mixins:['xxx']	``` 
当组件与mixin混合里面的data值发生冲入时，优先取值为组件中data里面定义的值，
当生命周期里面的钩子优先加载mixins中定义的



-->


<template>
    <div>
        <student></student>
        <school></school>
    </div>
    </template>
    <script>
    import  student from "./components/student.vue";
    import  school from "./components/school.vue";
    export default{
        name:'app',
        components:{
            student,
            school,
        },
    }
    
    /* 执行npm run serve */
    </script>
    