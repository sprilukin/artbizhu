import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";
import settings from "common/settings";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: settings.store.name,
        productCategories: {
            list: [],
            loading: false
        }
    },
    mutations,
    actions
});