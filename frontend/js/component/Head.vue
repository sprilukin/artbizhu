<template>
    <div>
        <h1 class="uk-heading-primary uk-text-center uk-heading main-title">
            {{ title }}
        </h1>
    </div>
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
