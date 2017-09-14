<template>

    <div>

        <template v-if="person">
            <h3 v-text="personData.name"></h3>
            <h4 v-text="personData.email"></h4>
            <img :src="personData.photo">
        </template>
        <span v-else>
            Loading person...
        </span>
        <hr>

    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            axios.get('https://randomuser.me/api/')
                .then((res) => {
                    this.person = res.data.results[0];
                });
        },
        data() {
            return {
                person: null
            };
        },
        computed: {
            personData() {
                return {
                    name: `${this.person.name.first} ${this.person.name.last}`,
                    photo: this.person.picture.large,
                    email: this.person.email
                };
            }
        }
    }
</script>

<style>

</style>
