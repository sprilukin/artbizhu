import productCategories from "../../service/productCategories";
import navigation from "../../router/navigation";
import Router from "../../router/Router";
import actionNames from "./actionNamesEnum";
import mutationNames from "./mutationNamesEnum";

function loadProductCategories({commit}, options) {
    commit(mutationNames.SET_PRODUCT_CATEGORIES_LOADING);

    productCategories.findAll(options).then((productCategories) => commit(mutationNames.SET_PRODUCT_CATEGORIES, productCategories));
}

function loadProductCategoryItem(commit, productCategory) {
    productCategory.images = productCategory.images.map((image) => Object.assign({
        id: image.uri
    }, image));

    commit(mutationNames.SET_PRODUCT_CATEGORY, productCategory);
}

function loadEmptyProductCategory({commit}) {
    loadProductCategoryItem(commit, {
        name: "",
        description: "",
        images: []
    });
}

export default {
    [actionNames.LOAD_PRODUCT_CATEGORIES]: loadProductCategories,

    [actionNames.LOAD_PRODUCT_CATEGORY]: function({commit}, id) {
        if (id === navigation.emptyEntityId) {
            loadEmptyProductCategory({commit});
        } else {
            commit(mutationNames.SET_PRODUCT_CATEGORIES_LOADING);

            productCategories.findById(id).then((productCategory) => {
                loadProductCategoryItem(commit, productCategory);
            });
        }
    },

    [actionNames.ADD_FILE_UPLOADS_FOR_PRODUCT_CATEGORY]: function({commit}, uploadedImages) {
        commit(mutationNames.ADD_FILE_UPLOADS_FOR_PRODUCT_CATEGORY, uploadedImages);
    },

    [actionNames.REORDER_PRODUCT_CATEGORY_IMAGES]: function({commit}, reorderedObj) {
        commit(mutationNames.REORDER_PRODUCT_CATEGORY_IMAGES, reorderedObj);
    },

    [actionNames.REMOVE_IMAGE_FROM_PRODUCT_CATEGORY]: function({commit}, index) {
        commit(mutationNames.REMOVE_IMAGE_FROM_PRODUCT_CATEGORY, index);
    },

    [actionNames.UPDATE_PRODUCT_CATEGORY_ITEM]: function({commit}, options) {
        commit(mutationNames.UPDATE_PRODUCT_CATEGORY_ITEM, options);
    },

    [actionNames.SAVE_PRODUCT_CATEGORY]: function({state, commit}, options) {
        let item = Object.assign({}, state.item, options);

        commit(mutationNames.SET_PRODUCT_CATEGORIES_LOADING);

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

    [actionNames.REMOVE_PRODUCT_CATEGORY]: function({commit}, id) {
        productCategories.remove(id).then(() => {
            loadProductCategories({commit}, {});
        });
    }
};