"use strict";

const vm = new Vue({
    el: 'main',
    beforeCreated() {
        console.log('Before created Vuejs context');
    },
    created() {
        console.log('Created Vuejs context');
    },
    beforeMount() {
        console.log('Before mount context on html element');
    },
    mounted() {
        console.log('Mounted context on html element');
    },
    beforeUpdate() {
        console.log('Before update data');
    },
    updated() {
        console.log('Updated data');
    },
    beforeDestory() {
        console.log('Before destroy Vuejs context');
    },
    destroyed() {
        console.log('Destroyed Vuejs context');
    },
    methods: {
        changeData() {
            this.exampleText = this.exampleText.split('').reverse().join('');
        }
    },
    data: {
        exampleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
});