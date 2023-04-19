import VueRouter from 'vue-router'
import About  from '../compontents/UseAbout.vue'
import Home from '../compontents/UseHome.vue'

export default new VueRouter({
    routes:[
        {
            path:'/About',
            component:About,
        },
        {
            path:'/Home',
            component:Home,//这里的组件compontent不要加s。
        }
    ]
})