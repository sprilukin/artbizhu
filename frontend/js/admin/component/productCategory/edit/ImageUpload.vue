<template>
    <div class="uk-card uk-card-default uk-card-body">
        <div class="test-upload uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload"></span>
            <span class="uk-text-middle">Attach</span>
            <div uk-form-custom>
                <input type="file" accept="image/*" multiple @change="onImagesSelected">
                <span class="uk-link">selecting one</span>
            </div>
        </div>
    </div>
</template>

<script>
    import imageUtil from "../../../util/imageUtil";

    export default {
        methods: {
            onImagesSelected: function(event) {
                let uploadedImages = [];
                let files = event.target.files;

                for (let index = 0; index < files.length; index++) {
                    uploadedImages.push({
                       file: files[index],
                       image: imageUtil.createImageFromFile(files[index])
                   });
                }

                if (uploadedImages.length) {
                    this.$store.dispatch("addFileUploadsForProductCategory", uploadedImages);
                }
            }
        }
    };
</script>
