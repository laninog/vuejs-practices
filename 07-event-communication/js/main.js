"use strict";

const eventBus = new Vue();

Vue.component('product-list', {
    props: {
        products: Array
    },
    template: `
        <div>
            <ul>
                <li v-for="p in products">
                    {{p.name}} - <small>{{p.price.toFixed(2)}}</small>
                    <button @click="buy(p.price)">-</button>
                    <button @click="refund(p.price)">+</button>
                </li>
            </ul>
        </div>
    `,
    methods: {
        buy(price) {
            eventBus.$emit('add', price);
        },
        refund(price) {
            eventBus.$emit('remove', price);
        }
    }
});

Vue.component('account', {
    created() {
        eventBus.$on('add', (amount) => {
            this.total += amount;
        });
        eventBus.$on('remove', (amount) => {
            if(this.total - amount < 0)
                return;
            this.total -= amount;
        });
    },
    template: `
        <section>
            <h2>$ {{total.toFixed(2)}} total</h2>
        </section>`,
    data() {
        return {
            total: 250
        };
    }
});

new Vue({
    el: 'main',
    data: {
        products: [
            {name: 'ES6 Book', price: 39},
            {name: 'Movies', price: 9},
            {name: 'Coffee', price: 2.30},
            {name: 'Headphones', price: 25},
            {name: 'Moleskine', price: 19},
            {name: 'Java Book', price: 70}
        ]
    }
});
