import products from "../service/products";

export default {
    loadProducts: function({commit}, options) {
        commit("setProductsLoading");

        products.getProducts(options).then((products) => commit("setProducts", products));
    }
};