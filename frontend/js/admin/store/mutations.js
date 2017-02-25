export default {
    // addProduct: function(state, productName) {
    //     state.store.products.push({name: productName});
    // },

    setProductCategories: function(state, products) {
        state.store.productCategories.loading = false;
        state.store.productCategories.items = products;
    },

    setProductCategoriesLoading: function(state) {
        state.store.productCategories.loading = true;
    }
};