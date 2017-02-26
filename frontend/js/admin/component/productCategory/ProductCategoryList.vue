<template>
    <div>
        <div v-show="!loading">
            <grid>
                <item v-for="productCategory in productCategories" :productCategory="productCategory"></item>
            </grid>
            <pagination :page="page" :total="total" :pageSize="pageSize"></pagination>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import ProductCategoryItem from "./ProductCategoryItem.vue";
    import FlexGrid from "uicommon/component/grid/FlexGrid.vue";
    import Pagination from "uicommon/component/pagination/Pagination.vue";
    import Loading from "uicommon/component/loading/Loading.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "uicommon/util/pagination";
    import settings from "common/settings";

    export default {
        props: ["page"],

        components: {
            item: ProductCategoryItem,
            pagination: Pagination,
            loading: Loading,
            grid: FlexGrid
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
