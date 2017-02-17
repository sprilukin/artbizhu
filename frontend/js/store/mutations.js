export default {
    addProduct: function(state, productName) {
        state.products.push({name: productName});
    },
    setProducts: function(state, products) {
        state.products = products;
    }
};