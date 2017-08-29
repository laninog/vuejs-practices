"use strict";

const  vm = new Vue({
    el: 'main',
    computed: {
        filterReverse() {
            if(this.wordFilter){
                return this.wordFilter.split('').reverse().join('');
            }
            return '';
        },
        wordsFiltered() {
            return this.words.filter((w) => (w.value.toLowerCase().includes(this.wordFilter.toLowerCase())));
        }
    },
    data: {
        wordFilter: '',
        words: [
            {value: 'Platform', characters: 8},
            {value: 'Train', characters: 5},
            {value: 'Bar', characters: 3},
            {value: 'Pants', characters: 5},
            {value: 'Seattle', characters: 7}
        ]
    }
});