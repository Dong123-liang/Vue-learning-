    <template> 
        <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{studentName}}</h2>
    <input type="text" v-fbind:value="name">
        </div>
    </template>
    <script>
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
                
        }
    </script>