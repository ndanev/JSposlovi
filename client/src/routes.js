import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from './components/views/Home.vue';
import About from './components/views/About.vue';
import Login from './components/views/Login.vue';
import Register from './components/views/Register.vue';
import Profile from './components/views/Profile.vue';

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/about',
        name: About,
        component: About
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/register',
        name: Register,
        component: Register
    },
    {
        path: '/profile',
        name: Profile,
        component: Profile
    },
    { path: '*', redirect: '/404' }

]

export const router = new VueRouter({
    mode: 'history',
    routes
})