import Vue from 'vue';
import Vuex from 'vuex';

import sign   from './modules/sign'
import signup from './modules/signup'
import signin from './modules/signin'

Vue.use(Vuex); 

export const store = new Vuex.Store({
	modules:{
		sign,
		signup,
		signin,
	},
	
})