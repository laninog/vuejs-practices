<template>

    <div>

        <h2>Word {{word}}</h2>

        <button @click="generate()">Generate</button>
        <button @click="remove()">Remove</button>

    </div>

</template>

<script>

    export default {
        methods: {
            generate() {
                this.$store.state.word += String.fromCharCode(97 + Math.random() * 23);
            },
            remove() {
                if(this.$store.state.word.length > 0) {
                    this.$store.state.word = this.$store.state.word.slice(0, -1);
                }
            }
        },
        computed: {
            word() {
                return this.$store.state.word;
            }
        }
    }

</script>