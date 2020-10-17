import Vue from 'vue';
import VueRouter from "vue-router";
import store from "./store"

Vue.use(VueRouter);

import Home from './components/views/Home.vue';
import About from './components/views/About.vue';
import Login from './components/views/Login.vue';
import Register from './components/views/Register.vue';
import Profile from './components/views/Profile.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    { path: '*', redirect: '/404' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

// protect routes
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            next('/profile');
        } else {
            next();
        }
    } else {
        next()
    }
});