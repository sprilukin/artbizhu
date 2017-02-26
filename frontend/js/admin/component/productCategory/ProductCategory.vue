<template>
    <productCategories></productCategories>
</template>

<script>
    import ProductCategories from "./ProductCategoryList.vue";

    export default {
        props: ["page"],

        components: {
            productCategories: ProductCategories
        },

        computed: {
        },

        methods: {
        }
    };
</script>