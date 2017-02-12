let Vuex = require("vuex"),
    Vue = require("vue");

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        addProductName: "test",
        products: [
            {name: "a"}
        ]
    },
    mutations: {
        addProduct: function(state, productName) {
            state.products.push({name: productName});
        }
    }
});