import productCategories from "../../service/productCategories";
import navigation from "../../router/navigation";
import Router from "../../router/Router";
import actionNames from "./actionNamesEnum";
import mutationNames from "./mutationNamesEnum";

function loadProductCategories({commit}, options) {
    commit(mutationNames.SET_LOADING);

    productCategories.findAll(options).then((productCategories) => commit(mutationNames.SET_LIST, productCategories));
}

function loadProductCategoryItem(commit, productCategory) {
    productCategory.images = productCategory.images.map((image) => Object.assign({
        id: image.uri
    }, image));

    commit(mutationNames.SET_ITEM, productCategory);
}

function loadEmptyProductCategory({commit}) {
    loadProductCategoryItem(commit, {
        name: "",
        description: "",
        images: []
    });
}

export default {
    [actionNames.LOAD_ALL]: loadProductCategories,

    [actionNames.LOAD_BY_ID]: function({commit}, id) {
        if (id === navigation.emptyEntityId) {
            loadEmptyProductCategory({commit});
        } else {
            commit(mutationNames.SET_LOADING);

            productCategories.findById(id).then((productCategory) => {
                loadProductCategoryItem(commit, productCategory);
            });
        }
    },

    [actionNames.ADD_IMAGES]: function({commit}, uploadedImages) {
        commit(mutationNames.ADD_IMAGES, uploadedImages);
    },

    [actionNames.REORDER_IMAGES]: function({commit}, reorderedObj) {
        commit(mutationNames.REORDER_IMAGES, reorderedObj);
    },

    [actionNames.REMOVE_IMAGE]: function({commit}, index) {
        commit(mutationNames.REMOVE_IMAGE, index);
    },

    [actionNames.UPDATE]: function({commit}, options) {
        commit(mutationNames.UPDATE, options);
    },

    [actionNames.SAVE]: function({state, commit}) {
        let item = Object.assign({}, state.item, state.updatedItem);

        commit(mutationNames.SET_LOADING);

        if (item._id) {
            productCategories.update(item).then((productCategory) => {
                loadProductCategoryItem(commit, productCategory);
            });
        } else {
            productCategories.save(item).then((productCategory) => {
                // redirect to saved product category
                Router.replace(`${navigation.all.categories.uri}/${productCategory._id}`);
            });
        }
    },

    [actionNames.REMOVE]: function({commit}, id) {
        productCategories.remove(id).then(() => {
            loadProductCategories({commit}, {});
        });
    }
};