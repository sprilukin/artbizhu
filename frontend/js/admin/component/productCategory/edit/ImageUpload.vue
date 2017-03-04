<template>
    <div class="uk-card uk-card-default uk-card-body">
        <div class="test-upload uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload"></span>
            <div uk-form-custom>
                <input type="file" accept="image/*" multiple @change="onImagesSelected">
                <span class="uk-link">Загрузить файлы</span>
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
                    let imageFromFile = imageUtil.createImageFromFile(files[index]);

                    uploadedImages.push({
                        id: imageFromFile.src,
                        file: files[index],
                        image: imageFromFile
                   });
                }

                if (uploadedImages.length) {
                    this.$store.dispatch("addFileUploadsForProductCategory", uploadedImages);
                }
            }
        }
    };
</script>
