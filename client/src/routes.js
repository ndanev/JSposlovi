import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from './components/views/Home.vue';
import About from './components/views/About.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    { path: '*', redirect: '/404' }

]

export const router = new VueRouter({
    mode: 'history',
    routes
})