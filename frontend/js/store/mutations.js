export default {
    addProduct: function(state, productName) {
        state.products.push({name: productName});
    }
};