<!-- ## 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

    1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

    2. 第二种方式，在父组件中：

        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('atguigu',this.test)
        }
        ```

    3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！ -->
<template>
    <div>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <school :getSchoolName="getSchoolName"></school>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- <student v-on:sendStuName="getStudentName"></student> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
          <student ref="student"></student>
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
        methods:{
            getSchoolName(name){
                console.log('APP收到了学校名',name);
            },
            getStudentName(name,...params){//...接受多个参数
              console.log('APP收到了学生姓名:',name,params)
            }
        },
        mounted(){
          this.$refs.student.$on('sendStuName',this.getStudentName)//使用ref将this的指向改为sutdent组件的实例vc
          // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
        }
    }
    
    /* 执行npm run serve */
    </script>
    