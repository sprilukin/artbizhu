<template>
    <img :src="imageUri" alt="" class="uk-transition-scale-up uk-transition-opaque" width="100">
</template>

<script>
    import settings from "uicommon/util/settings.js";

    export default {
        props: ["image", "index"],

        components: {
        },

        computed: {
            imageUri: function() {
                return `${settings.imagesPath}${this.image.uri}`;
            }
        },

        methods: {
        }
    };
</script>
