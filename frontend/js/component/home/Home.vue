<template>
    <layout>
        <h1>Hello</h1>
    </layout>
</template>

<script>
    import WideContainer from "../layout/WideContainer.vue";
    import { mapState } from "vuex"

    export default {
        components: {
            layout: WideContainer
        }
    };
</script>
