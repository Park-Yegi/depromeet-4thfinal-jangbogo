import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import signup from './modules/signup'

Vue.use(Vuex); 

export const store = new Vuex.Store({
	modules:{
		signup
	},
	
})