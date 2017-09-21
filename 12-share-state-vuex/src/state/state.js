import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const appState = new Vuex.Store({
    state: {
        word: ''
    }
});