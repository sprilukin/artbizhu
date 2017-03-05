<template>
    <img :src="imageUri" alt="" class="uk-transition-scale-up uk-transition-opaque">
</template>

<script>
    import settings from "uicommon/util/settings.js";

    export default {
        props: ["image", "index"],

        components: {
        },

        computed: {
            imageUri: function() {
                return `${settings.uploadedImagesPath}${this.image.uri}`;
            }
        },

        methods: {
        }
    };
</script>
