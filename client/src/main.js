import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import store from './store';
import axios from 'axios';
// import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false;

// sync(store, router);

/* Set up default vue's http modules for api call */
Vue.prototype.$http = axios;

const token = localStorage.getItem("token");

/* Default axios authorization header */
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.filter('formatDate', function (value) {
  const date = new Date(value);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return [day, month, year].join("-");
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
