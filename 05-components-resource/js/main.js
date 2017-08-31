"use strict";

Vue.component('user', {
    props: ['name', 'nat', 'location'],
    template: `
        <span>{{name.first}} / {{name.last}} / {{nat}} / {{location.street}}</span>`,
    mounted() {
        console.log('Component user init');
    },
    data() {
        return {};
    }
});

Vue.component('users-list', {
    props: ['users'],
    template: ` 
        <ul>
            <li v-for="u in users"><user :name="u.name" :nat="u.nat" :location="u.location"></user></li>
        </ul>`,
    mounted() {
        console.log('Component user-list init');
    },
    data() {
        return {};
    }
});

// Vue js
new Vue({
    el: 'main',
    mounted() {
        console.log('Instance init');
        this.$http.get('https://randomuser.me/api/?results=5').then((res) => {
            this.usersData = res.body.results;
        }, (err) => {
            console.error(err);
        });
    },
    data: {
        usersData: []
    }
});
