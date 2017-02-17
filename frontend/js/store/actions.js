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
    loadProducts: async function({commit}) {
        let p = await products.getProducts();
        commit("setProducts", p);
    }
};