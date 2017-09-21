import Vue from 'vue';
import App from './App.vue';
import {appState} from './state/state';

new Vue({
    el: '#app',
    store: appState,
    render: h => h(App)
});
