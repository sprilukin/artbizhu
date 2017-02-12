<template>
    <div>
        <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
            <div v-for="product in products">
                <product v-bind:product="product"></product>
            </div>
        </div>
        <router-link to="/">Go to Index</router-link>
    </div>
</template>

<script>
    let Product = require("./Product.vue");

    module.exports = {
        components: {
            product: Product
        },

        props: ["products"],

        computed: {
        },

        methods: {

        }
    };
</script>
