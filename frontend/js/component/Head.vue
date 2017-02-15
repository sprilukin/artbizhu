<template>
    <h1 class="uk-heading-primary">{{ title }}</h1>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                title: (state) => state.title
            })
        },
    }
</script>
