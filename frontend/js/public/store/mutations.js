export default {
    setProducts: function(state, products) {
        state.products.loading = false;
        state.products.list = products.list;
        state.products.total = products.total;
    },

    setProductsLoading: function(state) {
        state.products.loading = true;
    }
};