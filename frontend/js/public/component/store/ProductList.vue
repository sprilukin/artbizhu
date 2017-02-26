<template>
    <div>
        <div v-show="!loading">
            <grid>
                <div v-for="product in products">
                    <product :product="product"></product>
                </div>
            </grid>
            <pagination :page="page" :pageSize="pageSize" :total="total"></pagination>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import Product from "./Product.vue";
    import FlexGrid from "uicommon/component/grid/FlexGrid.vue";
    import Pagination from "uicommon/component/pagination/Pagination.vue";
    import Loading from "uicommon/component/loading/Loading.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "uicommon/util/pagination";
    import settings from "common/settings";

    export default {
        props: ["page"],

        components: {
            grid: FlexGrid,
            product: Product,
            pagination: Pagination,
            loading: Loading
        },

        computed: {
            ...mapState({
                products: (state) => state.products.list,
                loading: (state) => state.products.loading,
                total: (state) => state.products.total
            }),
            pageSize: () => settings.pagination.limit,
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            },
        },

        methods: {
            ...mapActions({
                loadProducts: 'loadProducts' // map this.add() to this.$store.dispatch('increment')
            }),
            loadProductsForCurrentPage: function() {
                this.loadProducts({
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
