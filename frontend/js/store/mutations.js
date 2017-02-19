export default {
    addProduct: function(state, productName) {
        state.store.products.push({name: productName});
    },

    setProducts: function(state, products) {
        state.store.products = products;
    }
};