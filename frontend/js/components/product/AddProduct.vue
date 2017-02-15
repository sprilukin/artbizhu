<template>
    <div class="uk-margin">
        <div>{{ productsCount }}</div>
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Product name" :value="addProductName">
        <button class="uk-button uk-button-primary" v-on:click="addProduct('test')">Add Product</button>
        <router-link to="/products">Go to Products</router-link>
        <productList></productList>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import ProductList from "./ProductList.vue";

    let AddProduct = {
        components: {
            productList: ProductList
        },

        computed: {
            ...mapState({
                productsCount: (state) => state.products.length,
                addProductName: (state) => state.addProductName
            })
        },

        methods: {
            ...mapActions([
                'addProduct'
            ])
        }
    };

    export default AddProduct;
</script>
