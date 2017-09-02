"use strict";

const  vm = new Vue({
    el: 'main',
    methods: {
        add(address) {
            this.addresses.push({id: this.addresses.length + 1, name: address, sold: false});
            this.address = '';
        },
        sell(address) {
            address.sold = true;
        }
    },
    computed: {
        toSell() {
            return this.addresses.filter((a) => !a.sold);
        },
        sold() {
            return this.addresses.filter((a) => a.sold);
        }
    },
    data: {
        address: '',
        addresses: [
            {id: 1, name: '3938 Horton St, Emeryville', sold: false},
            {id: 2, name: '1330 Fitzgerald Dr, Pinole', sold: false},
            {id: 3, name: '2270 Bridgepointe Pkwy, San Mateo', sold: false},
            {id: 4, name: '2111 White Corner, San Mateo', sold: false},
            {id: 5, name: '2200 Eastridge Loop, San Jose', sold: false}
        ]
    }
});