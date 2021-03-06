<template>
    <div>
        <div v-show="!loading">
            <table class="uk-table uk-table-small uk-table-middle">
                <caption class="uk-text-center">Категории</caption>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th class="uk-table-shrink">Операции</th>
                </tr>
                </thead>
                <tbody>
                    <productCategoryListItem @remove="onRemove" v-for="productCategory in productCategories"
                                             :productCategory="productCategory">
                    </productCategoryListItem>
                </tbody>
            </table>

            <pagination :page="page" :total="total" :pageSize="pageSize"></pagination>

            <div uk-grid class="uk-flex-center">
                <router-link :to="addCategoryLink" class="uk-button uk-button-primary">
                    <span uk-icon="icon: plus"></span>
                    Добавить категорию
                </router-link>
            </div>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import ProductCategoryListItem from "./ProductCategoryLIstItem.vue";
    import Pagination from "uicommon/component/pagination/Pagination.vue";
    import Loading from "uicommon/component/loading/Loading.vue";
    import { mapState, mapActions } from "vuex"
    import actionNamesEnum from "../../../store/productCategory/actionNamesEnum";
    import modulesEnum from "../../../store/modulesEnum";
    import pagination from "uicommon/util/pagination";
    import settings from "common/settings";
    import navigation from "../../../router/navigation";
    import uikit from "uikit";

    export default {
        props: ["page"],

        components: {
            pagination: Pagination,
            loading: Loading,
            productCategoryListItem: ProductCategoryListItem
        },

        computed: {
            ...mapState(modulesEnum.PRODUCT_CATEGORY, {
                productCategories: (state) => state.list,
                loading: (state) => state.loading,
                total: (state) => state.total
            }),
            addCategoryLink() {
                return navigation.all.addCategory.uri;
            },
            pageSize: () => settings.pagination.limit,
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            }
        },

        methods: {
            ...mapActions(modulesEnum.PRODUCT_CATEGORY, {
                loadAll: actionNamesEnum.LOAD_ALL,
                remove: actionNamesEnum.REMOVE
            }),
            loadProductsForCurrentPage: function() {
                this.loadAll({
                    offset: this.offset
                });
            },
            onRemove: function(id) {
                uikit.modal.confirm("Удалить?", {
                    center: true
                }).then(() => {
                    this.remove(id);
                }, () => {});
            }
        },

        watch: {
            page: function () {
                this.loadProductsForCurrentPage();
            }
        },

        created: function() {
            this.loadProductsForCurrentPage();
        }
    };
</script>
