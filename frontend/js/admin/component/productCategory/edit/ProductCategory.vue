<template>
    <div>
        <div v-show="!loading">
            <breadCrumb :productCategory="productCategory"></breadCrumb>

            <form class="uk-form-horizontal uk-margin-large" action="/api/productCategories" method="POST" enctype="multipart/form-data">

                <div class="uk-margin">
                    <div class="uk-form-label">Название</div>
                    <div class="uk-form-controls">
                        <input name="name" class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text..." :value="productCategory.name">
                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-form-label">Описание</div>
                    <div class="uk-form-controls uk-form-controls-text">
                        <textarea name="description" class="uk-textarea" id="form-horizontal-select" rows="5" placeholder="Textarea" :value="productCategory.description"></textarea>
                    </div>
                </div>

                <grid uk-sortable="handle: .uk-sortable-handle" class="j-productCategory-images-grid">
                    <productCategoryImage v-for="(image, index) in productCategory.images" :image="image" :index="index" :key="image.id"></productCategoryImage>
                </grid>

                <imageUpload @upload="onImageUpload"></imageUpload>
            </form>

            <div uk-grid class="uk-flex-center">
                <router-link :to="categoryLink" class="uk-button uk-button-default">
                    <span uk-icon="icon: arrow-left"></span>
                    К категориям
                </router-link>
                <button class="uk-button uk-button-primary" type="button" @click="onSaveClicked">
                    <span uk-icon="icon: push"></span>
                    Сохранить
                </button>
            </div>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import Loading from "uicommon/component/loading/Loading.vue";
    import navigation from "../../../router/navigation";
    import FlexGrid from "uicommon/component/grid/FlexGrid.vue";
    import ProductCategoryImage from "./ProductCategoryImage.vue";
    import ImageUpload from "../../common/ImageUpload.vue";
    import BreadCrumb from "./BreadCrumb.vue";
    import $ from "jquery";

    export default {
        props: ["id"],

        components: {
            loading: Loading,
            grid: FlexGrid,
            productCategoryImage: ProductCategoryImage,
            imageUpload: ImageUpload,
            breadCrumb: BreadCrumb
        },

        computed: {
            ...mapState("productCategories", {
                productCategory: (state) => state.item,
                loading: (state) => state.loading
            }),
            categoryLink() {
                return navigation.all.categories.uri
            }
        },

        methods: {
            ...mapActions("productCategories", {
                loadProductCategory: "loadProductCategory",
                saveProductCategory: "saveProductCategory",
                reorderProductCategoryImages: "reorderProductCategoryImages",
                addFileUploadsForProductCategory: "addFileUploadsForProductCategory"
            }),
            loadCurrentProductCategory: function() {
                this.loadProductCategory(this.id);
            },
            onReorder: function(event, sortable) {
                let reordered = [];

                sortable.$el.find("> div").each((index, el) => {
                    reordered.push({
                        newIndex: Number($(el).attr("data-index")),
                        oldIndex: index
                    });
                });

                this.reorderProductCategoryImages(reordered);
            },
            onSaveClicked: function() {
                let options = {
                    name: $(this.$el).find("input[name='name']").val(),
                    description: $(this.$el).find("textarea[name='description']").val()
                };

                this.saveProductCategory(options);
            },
            onImageUpload: function(uploadedImages) {
                this.addFileUploadsForProductCategory(uploadedImages);
            }
        },

        watch: {
            id: function () {
                this.loadCurrentProductCategory();
            }
        },

        created: function() {
            this.loadCurrentProductCategory();
        },

        mounted: function() {
            $(this.$el).find(".j-productCategory-images-grid").on("change", this.onReorder.bind(this));
        },

        destroyed: function() {
            $(this.$el).find(".j-productCategory-images-grid").off("change");
        }
    };
</script>
