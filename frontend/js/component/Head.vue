<template>
    <h1 class="uk-heading-primary uk-text-center uk-heading-divider" style='font-family: Pacifico, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'>{{ title }}</h1>
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
