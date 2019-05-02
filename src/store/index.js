import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';

const store = () => new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;
