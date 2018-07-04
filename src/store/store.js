import Vue from 'vue';
import Vuex from 'vuex';

import sign from './modules/sign'

Vue.use(Vuex); 

export const store = new Vuex.Store({
	modules:{
		sign
	},
	
})