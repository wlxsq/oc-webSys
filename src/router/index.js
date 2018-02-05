import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/common/login';
import index from '../components/common/index';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '*',
			redirect: '/login',	
		},
		{
			path: '/login',
			component: login,
		},
		{
			path: '/index',
			component: index,	
		},
	]
})
