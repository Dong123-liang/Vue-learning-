//引入VueRouter
import VueRouter from 'vue-router'
//引入路由中的组件
import About  from '../pages/UseAbout.vue'
import Home from '../pages/UseHome.vue'
import Message from '../pages/UseInForMation.vue'
import News  from '../pages/UseNews.vue'
import details from '../pages/detail.vue'
export default new VueRouter({
    routes:[
        {
            path:'/About',
            component:About,
        },
        {
            path:'/Home',
            component:Home,//这里的组件compontent不要加s。
            children:[
                {
                    path:"News",
                    component:News,
                },
                {
                    path:'Message',//二级路由中的路径不要加'/'！
                    component:Message,
                    children:[
                        {
                            path:'datails',
                            name:'xiangqing',
                            component:details,
                            
							//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
							// props:{a:1,b:'hello'}

							//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
							 //props:true
                             //props的第三种写法，值为函数
                             props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    a:1,
                                    name:'轨迹'
                                }
                             }
                        }
                    ]
                }
            ]
        }
    ]
})