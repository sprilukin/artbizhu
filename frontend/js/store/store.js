import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        addProductName: "test",
        products: [
            {name: "a"}
        ]
    },
    mutations,
    actions
});