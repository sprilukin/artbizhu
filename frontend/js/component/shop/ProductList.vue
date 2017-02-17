<template>
    <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-text-center" uk-grid>
        <div v-for="product in products">
            <product :product="product"></product>
        </div>
    </div>
</template>

<script>
    import Product from "./Product.vue";
    import { mapState } from "vuex"

    export default {
        components: {
            product: Product
        },

        computed: {
            ...mapState({
                products: (state) => state.products
            })
        },

        methods: {

        }
    };
</script>
