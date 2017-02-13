let Vuex = require("vuex"),
    Vue = require("vue"),
    mutations = require("./mutations"),
    actions = require("./actions");

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        addProductName: "test",
        products: [
            {name: "a"}
        ]
    },
    mutations,
    actions
});