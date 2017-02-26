export default {
    // addProduct: function(state, productName) {
    //     state.store.products.push({name: productName});
    // },

    setProductCategories: function(state, productCategories) {
        state.productCategories.loading = false;
        state.productCategories.list = productCategories.list;
        state.productCategories.total = productCategories.total;
    },

    setProductCategoriesLoading: function(state) {
        state.productCategories.loading = true;
    }
};