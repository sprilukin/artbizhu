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
                    <productCategoryListItem v-for="productCategory in productCategories" :productCategory="productCategory"></productCategoryListItem>
                </tbody>
            </table>

            <pagination :page="page" :total="total" :pageSize="pageSize"></pagination>

            <confirm id="remove-product-category"></confirm>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import ProductCategoryListItem from "./ProductCategoryLIstItem.vue";
    import Pagination from "uicommon/component/pagination/Pagination.vue";
    import Confirm from "../../modal/Confirm.vue";
    import Loading from "uicommon/component/loading/Loading.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "uicommon/util/pagination";
    import settings from "common/settings";

    export default {
        props: ["page"],

        components: {
            pagination: Pagination,
            loading: Loading,
            confirm: Confirm,
            productCategoryListItem: ProductCategoryListItem
        },

        computed: {
            ...mapState({
                productCategories: (state) => state.productCategories.list,
                loading: (state) => state.productCategories.loading,
                total: (state) => state.productCategories.total
            }),
            pageSize: () => settings.pagination.limit,
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            }
        },

        methods: {
            ...mapActions({
                loadProductCategories: 'loadProductCategories'
            }),
            loadProductsForCurrentPage: function() {
                this.loadProductCategories({
                    offset: this.offset
                });
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
