import Vuex from "vuex";
import Vue from "vue";
import productCategory from "./productCategory";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        productCategories: productCategory
    }
});