import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Users from '../views/Users.vue'
import Login from '@/views/Login.vue'
import Home from "@/views/Home.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {path: '/', name: 'Login', component: Login},
    {
        path: '/home', name: 'Home', component: Home, children: [
            {path: '/users', name: 'Users', component: Users},
        ]
    },
    {path: '/login', name: 'Login', component: Login},
    {path: '/about', name: 'About', component: () => import('../views/About.vue')},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
