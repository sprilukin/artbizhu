<template>
    <div>
        <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
            <div v-for="product in products">
                <product :product="product"></product>
            </div>
        </div>
        <router-link to="/">Go to Index</router-link>
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
