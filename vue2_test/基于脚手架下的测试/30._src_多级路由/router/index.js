//引入VueRouter
import VueRouter from 'vue-router'
//引入路由中的组件
import About  from '../pages/UseAbout.vue'
import Home from '../pages/UseHome.vue'
import Message from '../pages/UseInForMation.vue'
import News  from '../pages/UseNews.vue'

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
                }
            ]
        }
    ]
})