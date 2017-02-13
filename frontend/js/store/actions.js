module.exports = {
    addProduct: function({commit}, productName) {
        setTimeout(() => commit("addProduct", productName), 500);
    }
};