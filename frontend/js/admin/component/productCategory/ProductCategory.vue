<template>
    <div>
        <div v-if="!loading">
            <ul class="uk-breadcrumb">
                <li>
                    <router-link to="/category">
                        Категории
                    </router-link>
                </li>
                <li>
                    <span href="#">{{productCategory.name}}</span>
                </li>
            </ul>

            <form class="uk-form-horizontal uk-margin-large">

                <div class="uk-margin">
                    <div class="uk-form-label">Название</div>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text..." :value="productCategory.name">
                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-form-label">Описание</div>
                    <div class="uk-form-controls uk-form-controls-text">
                        <textarea class="uk-textarea" id="form-horizontal-select" rows="5" placeholder="Textarea" :value="productCategory.description"></textarea>
                    </div>
                </div>

            </form>

            <div uk-grid class="uk-flex-center">
                <router-link to="/category" class="uk-button uk-button-default">
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

    export default {
        props: ["id"],

        components: {
            loading: Loading
        },

        computed: {
            ...mapState({
                productCategory: (state) => state.productCategories.item,
                loading: (state) => state.productCategories.loading
            })
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
