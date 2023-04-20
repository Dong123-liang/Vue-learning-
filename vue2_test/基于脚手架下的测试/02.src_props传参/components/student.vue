
<!-- 1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        name:{
        type:String, //类型
        required:true, //必要性
        default:'老王' //默认值
        }
        }
        ```

    > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
    -->
<template> 
    <div>
<h1>{{msg}}</h1>
<h2>学生姓名：{{name}}</h2>
<h2>学生年龄：{{myAge}}</h2>
<h2>学生性别：{{sex}}</h2>
<button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>
<script>
    export default{
        name:'StudentName',
        data() {
            return {
                msg:'轨迹',
                myAge:this.age,
            }
        },
         methods:{
            updateAge(){
                this.myAge++;//props里的属性不可以修改会有警告，若修改可以在data里面设置新的属性等于props里面的属性，然后修改data里面的值
            }
         },
        //简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
         props:{
            name:{
                type:String,//name属性必须为字符串
                required:true,//设置name为必要参数,若没有引用会报错
            },
            age:{
                type:Number,
                default:21,//设置默认值为21
            },
            sex:{
                type:String,
                required:true,
            }
         }
            
    }
</script>
