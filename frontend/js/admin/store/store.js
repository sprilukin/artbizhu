import Vuex from "vuex";
import Vue from "vue";
import productCategory from "./productCategory";
import modulesEnum from "./modulesEnum";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        [modulesEnum.PRODUCT_CATEGORY]: productCategory
    }
});