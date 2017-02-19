<template>
    <div>
        <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-text-center" uk-grid>
            <div v-for="product in products">
                <product :product="product"></product>
            </div>
        </div>
        <div class="uk-container uk-container-small">
            <ul class="uk-pagination">
                <li :class="{'uk-disabled': !hasPrevious}">
                    <router-link :to="{ path: '', query: { page: previous } }">
                        <span class="uk-margin-small-right" uk-pagination-previous></span>
                        Previous
                    </router-link>
                </li>
                <li :class="{'uk-disabled': !hasNext}">
                    <router-link :to="{ path: '', query: { page: next } }">
                        Next
                        <span class="uk-margin-small-left" uk-pagination-next></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Product from "./Product.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "../../service/util/pagination";

    export default {
        props: ["page"],

        components: {
            product: Product
        },

        computed: {
            ...mapState({
                products: (state) => state.store.products
            }),
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            },
            hasPrevious: function() {
                return this.page > 0;
            },
            hasNext: function() {
                return this.page < 3;
            },
            previous: function() {
                return this.hasPrevious ? this.page - 1 : 0
            },
            next: function() {
                return this.hasNext ? this.page + 1 : this.page;
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
            page: function (val) {
                this.loadProductsForCurrentPage();
            }
        },

        created: function() {
            this.loadProductsForCurrentPage();
        }
    };
</script>
