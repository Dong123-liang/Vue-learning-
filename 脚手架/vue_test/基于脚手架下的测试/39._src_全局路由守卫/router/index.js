//引入VueRouter
import VueRouter from 'vue-router'
//引入路由中的组件
import About  from '../pages/UseAbout.vue'
import Home from '../pages/UseHome.vue'
import Message from '../pages/UseInForMation.vue'
import News  from '../pages/UseNews.vue'
import details from '../pages/detail.vue'
 const router=new VueRouter({
    routes:[
        {   name:'About',
            path:'/About',
            component:About,
            meta:{title:'关于'}
        },
        {   name:'Home',
            path:'/Home',
            component:Home,//这里的组件compontent不要加s。
            meta:{title:'主页'},
            children:[
                {
                    name:'News',
                    path:"News",
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'Message',
                    path:'Message',//二级路由中的路径不要加'/'！
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            path:'datails',
                            name:'xiangqing',
                            component:details,
                            meta:{isAuth:true,title:'详情'},
                            
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
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from)
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='西安邮电大学'){
            next()
        }else{
            alert('学校名称不对,无法查看！')
        }
    }else{
        next()
    }
})
//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from)
    console.log(to.meta.title);
    document.title = to.meta.title || '硅谷系统'
})
export default router