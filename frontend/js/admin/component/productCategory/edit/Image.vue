<template>
    <img :src="imageUri" alt="" class="uk-transition-scale-up uk-transition-opaque">
</template>

<script>
    import settings from "uicommon/util/settings.js";

    export default {
        props: ["uri"],

        components: {
        },

        computed: {
            imageUri: function() {
                return `${settings.uploadedImagesPath}${this.uri}`;
            }
        },

        methods: {
        }
    };
</script>
