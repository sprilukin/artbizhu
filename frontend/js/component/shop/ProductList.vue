<template>
    <div>
        <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-text-center" uk-grid>
            <div v-for="product in products">
                <product :product="product"></product>
            </div>
        </div>
        <pagination :page="page"></pagination>
    </div>
</template>

<script>
    import Product from "./Product.vue";
    import Pagination from "./Pagination.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "../../service/util/pagination";
    import UIkit from "uikit";

    export default {
        props: ["page"],

        components: {
            product: Product,
            pagination: Pagination
        },

        computed: {
            ...mapState({
                products: (state) => state.store.products
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
                let scroll = UIkit.scroll("#top");
                scroll[0].scrollToElement("#top");
                this.loadProductsForCurrentPage();
            }
        },

        created: function() {
            this.loadProductsForCurrentPage();
        }
    };
</script>
