<template>
    <div>
        <div v-show="!loading">
            <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-text-center" uk-grid>
                <div v-for="product in products">
                    <product :product="product"></product>
                </div>
            </div>
            <pagination :page="page"></pagination>
        </div>
        <div v-show="loading" class="uk-flex uk-height-small uk-margin uk-text-center">
            <div class="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-body">
                <div uk-spinner></div>
                Загрузка
            </div>
        </div>
    </div>
</template>

<script>
    import Product from "./Product.vue";
    import Pagination from "./Pagination.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "uicommon/util/pagination";

    export default {
        props: ["page"],

        components: {
            product: Product,
            pagination: Pagination
        },

        computed: {
            ...mapState({
                products: (state) => state.store.products,
                loading: (state) => state.store.loading
            }),
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            }
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
