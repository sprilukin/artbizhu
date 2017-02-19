export default {
    addProduct: function(state, productName) {
        state.store.products.push({name: productName});
    },

    setProducts: function(state, products) {
        state.store.loading = false;
        state.store.products = products;
    },

    setProductsLoading: function(state) {
        state.store.loading = true;
    }
};