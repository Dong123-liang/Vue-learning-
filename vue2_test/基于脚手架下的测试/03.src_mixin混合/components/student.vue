    <template> 
        <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{studentName}}</h2>
    <button @click="showName">点我显示学生名字</button>
        </div>
    </template>
    <script>
       import {mix1,mixData} from '../mixin';
        export default{
            name:'studentName',
            data() {
                return {
                    msg:'轨迹',
                    studentName:'轨迹',
                    name:'轨迹',
                    x:300,
                }
            },
            mounted(){
             console.log('这里是student组件里的挂载');
            },
            mixins:[mix1,mixData],//此处为默认mixins属性调用公共配置,记得加s。
                
        }
    </script>