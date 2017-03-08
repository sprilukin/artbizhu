<template>
    <div class="uk-card uk-card-default uk-card-body" :data-index="index">
        <button class="uk-modal-close-default uk-close" type="button" uk-close="" @click="onRemoveClicked"></button>
        <span class="uk-sortable-handle uk-margin-small-left" uk-icon="icon: table"></span>
        <existingImage v-if="image.uri" :uri="image.uri"></existingImage>
        <uploadedImage v-if="image.file" :image="image.image"></uploadedImage>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import UploadedImage from "../../common/UploadedImage.vue";
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
                this.$emit("remove", this.index);
            }
        }
    };
</script>
