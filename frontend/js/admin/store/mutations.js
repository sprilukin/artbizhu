export default {
    // addProduct: function(state, productName) {
    //     state.store.products.push({name: productName});
    // },

    setProductCategories: function(state, products) {
        state.productCategories.loading = false;
        state.productCategories.list = products;
    },

    setProductCategoriesLoading: function(state) {
        state.productCategories.loading = true;
    }
};