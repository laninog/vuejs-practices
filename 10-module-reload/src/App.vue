<template>

    <div>

        <movies></movies>

        <hr>

        <h2>Out CSS Scope</h2>

        <ul>
            <li><a href="#">Test Scope</a></li>
        </ul>

    </div>

</template>

<script>
    import movies from './components/movies.vue';

    export default {
        components: {movies}
    }
</script>