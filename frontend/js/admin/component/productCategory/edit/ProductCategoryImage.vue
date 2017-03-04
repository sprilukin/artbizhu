<template>
    <div class="uk-card uk-card-default uk-card-body" :data-index="index">
        <button class="uk-modal-close-default uk-close" type="button" uk-close="" @click="onRemoveClicked"></button>
        <existingImage v-if="image.uri" :image="image"></existingImage>
        <uploadedImage v-if="image.file" :image="image"></uploadedImage>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import UploadedImage from "./UploadedImage.vue";
    import Image from "./Image.vue";

    export default {
        props: ["image", "index"],

        components: {
            uploadedImage: UploadedImage,
            existingImage: Image
        },

        computed: {
        },

        methods: {
            onRemoveClicked: function() {
                console.log(this.index);
            }
        }
    };
</script>
