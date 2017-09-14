<template>
    <div>
        <h2>Movies</h2>
        <ul>
            <li v-for="m in pendingMovies">
                <a href="#" @click="updateMovie(m)" v-text="m.name"></a>
            </li>
        </ul>
        <h2>Movies Watched</h2>
        <ul>
            <li v-for="m in watchedMovies">
                <a href="#" @click="updateMovie(m)" v-text="m.name"></a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                movies: [
                    {name: '2012', watched: false},
                    {name: 'I am Legend', watched: false},
                    {name: 'The Big Short', watched: false},
                    {name: 'Elektra', watched: false},
                ],
                finished: []
            }
        },
        methods: {
            updateMovie(movie) {
                movie.watched = !movie.watched;
            }
        },
        computed: {
            pendingMovies() {
                return this.movies.filter((movie) => !movie.watched);
            },
            watchedMovies() {
                return this.movies.filter((movie) => movie.watched);
            }
        }
    }
</script>
<style scoped>
    li a {
        color: darkgoldenrod;
        font-weight: bold;
        text-decoration: none;
    }
</style>