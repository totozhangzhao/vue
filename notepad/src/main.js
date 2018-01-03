import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './store/index';
Vue.use(Vuex);
new Vue({
	el: '#app',
    store,
	template: '<App/>',
	components: {App}
})
