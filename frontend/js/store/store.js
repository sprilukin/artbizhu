import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "Handcrafted",
        addProductName: "test",
        products: [
            {
                id: 1,
                name: "Test",
                src: "/img/1.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/2.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/3.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/4.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/1.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/2.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/3.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/4.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/1.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/2.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/3.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/4.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/1.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/2.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/3.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/4.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/1.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/2.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/3.jpg"
            },
            {
                id: 1,
                name: "Test",
                src: "/img/4.jpg"
            }
        ]
    },
    mutations,
    actions
});