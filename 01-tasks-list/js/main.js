const  vm = new Vue({
    el: 'main',
    methods: {
        addTask() {
            this.tasks.unshift({
                name: this.task,
                priority: 0
            });
            this.task = null;
        }
    },
    data: {
        task: null,
        tasks: [
            {name: 'Buy Water', priority: '0'},
            {name: 'Read a Book', priority: '0'}
        ]
    }
});