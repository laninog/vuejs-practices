"use strict";

Vue.component('tasks-list', {
    template: `
        <div>
            <ul>
                <task v-for="(t, i) in tasks" :key="i" :task="t"></task>
            </ul>
        </div>`,
    data() {
	    return {
            tasks: [
    	        'Set alarm',
                'Start workflow with Webpack',
                'Study Vuex documentation',
                'Check out Vue Router'
            ]
        }
    }
});

Vue.component('task', {
    props: ['task'],
    template: `<li> {{ task }}</li>`
});

Vue.component('contact', {
    template: `
        <div>
            <a href="mailto:test@gmail.com">test@gmail.com</a>
        </div>`
});

Vue.component('bio', {
    template: `
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus.</p>
        </div>`
});

new Vue({
	el: 'main',
    data: {
        selected: 'tasks-list'
    }
});
