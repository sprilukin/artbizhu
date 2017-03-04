<template>
    <img :src="imageUri" alt="" class="uk-transition-scale-up uk-transition-opaque" width="100">
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        props: ["image", "index"],

        components: {
        },

        computed: {
            imageUri: function() {
                return `/img/uploaded/${this.image.uri}`;
            }
        },

        methods: {
        }
    };
</script>
