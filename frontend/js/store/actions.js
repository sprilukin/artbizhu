import products from "../service/products";

export default {
    addProduct: async function({commit}, productName) {
        function delay(ms) {
            return new Promise(function(resolve) {
                setTimeout(() => {
                    resolve();
                }, ms);
            });
        }

        await delay(1000);
        commit("addProduct", productName);
    },

    loadProducts: function({commit}, options) {
        commit("setProductsLoading");

        products.getProducts(options).then((products) => commit("setProducts", products));
    }
};