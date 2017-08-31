"use strict";

Vue.component('person', {
    //props: ['name', 'email', 'image'],
    //multiple types type: [String, Boolean ...]
    props: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            default: 'Default'
        },
        image: String, // null = *
        location: {
            type: Object,
            default() {
                return {
                    city: 'Default'
                }
            }
        }
    },
    methods: {
        emitRemove() {
            this.$emit('remove');
        }
    },
    template: `
		<div>
		    <blockquote>
		        <span @click="emitRemove">[X]</span>
			    <img :src="image" align="right">
			    <h1>{{name}}</h1>
			    <h3>{{email}}</h3>
			    <ul>
			        <li v-for="(value, key, index) in location" :key="index">
			            {{value}}
                    </li>
                </ul>
			    <hr>
			</blockquote>
		</div>`
});


// Vue js
new Vue({
    el: 'main',
    mounted() {
        console.log('Instance init');
        this.loadPeople(2);
    },
    data: {
        people: []
    },
    methods: {
        remove(i) {
            this.people.splice(i, 1);
        },
        loadPeople(num) {
            this.$http.get('https://randomuser.me/api/?results=' + num).then((res) => {
                this.people= res.body.results;
            }, (err) => {
                console.err(err);
            });
        }
    }
});
