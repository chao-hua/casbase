import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Cusbase from 'packages/index';

Vue.config.productionTip = false;
Vue.use(Cusbase);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
