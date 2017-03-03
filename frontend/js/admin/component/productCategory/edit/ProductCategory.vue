<template>
    <div>
        <div v-if="!loading">
            <ul class="uk-breadcrumb">
                <li>
                    <router-link :to="categoryLink">
                        Категории
                    </router-link>
                </li>
                <li>
                    <span href="#">{{productCategory.name}}</span>
                </li>
            </ul>

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

                <grid>
                        <productCategoryImage v-for="(image, index) in productCategory.images" :image="image" :index="index"></productCategoryImage>
                        <div class="uk-card uk-card-default uk-card-body">
                            <div class="test-upload uk-placeholder uk-text-center">
                                <span uk-icon="icon: cloud-upload"></span>
                                <span class="uk-text-middle">Attach</span>
                                <div uk-form-custom>
                                    <input type="file" multiple>
                                    <span class="uk-link">selecting one</span>
                                </div>
                            </div>
                        </div>
                </grid>

            </form>

            <div uk-grid class="uk-flex-center">
                <router-link :to="categoryLink" class="uk-button uk-button-default">
                    <span uk-icon="icon: arrow-left"></span>
                    К категориям
                </router-link>
                <button class="uk-button uk-button-primary" type="button">
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

    export default {
        props: ["id"],

        components: {
            loading: Loading,
            grid: FlexGrid,
            productCategoryImage: ProductCategoryImage
        },

        computed: {
            ...mapState({
                productCategory: (state) => state.productCategories.item,
                loading: (state) => state.productCategories.loading
            }),
            categoryLink() {
                return navigation.all.categories.uri
            }
        },

        methods: {
            ...mapActions({
                loadProductCategory: 'loadProductCategory'
            }),
            loadCurrentProductCategory: function() {
                this.loadProductCategory(this.id);
            }
        },

        watch: {
            id: function () {
                this.loadCurrentProductCategory();
            }
        },

        created: function() {
            this.loadCurrentProductCategory();
        }
    };
</script>
