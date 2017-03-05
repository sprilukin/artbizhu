import productCategories from "../service/productCategories";
import navigation from "../router/navigation";
import Router from "../router/Router";

function loadProductCategories({commit}, options) {
    commit("setProductCategoriesLoading");

    productCategories.findAll(options).then((productCategories) => commit("setProductCategories", productCategories));
}

function loadProductCategoryItem(commit, productCategory) {
    productCategory.images = productCategory.images.map((image) => Object.assign({
        id: image.uri
    }, image));

    commit("setProductCategory", productCategory);
}

function loadEmptyProductCategory({commit}) {
    loadProductCategoryItem(commit, {
        name: "",
        description: "",
        images: []
    });
}

export default {
    loadProductCategories: loadProductCategories,

    loadProductCategory: function({commit}, id) {
        if (id === navigation.emptyEntityId) {
            loadEmptyProductCategory({commit});
        } else {
            commit("setProductCategoriesLoading");

            productCategories.findById(id).then((productCategory) => {
                loadProductCategoryItem(commit, productCategory);
            });
        }
    },

    addFileUploadsForProductCategory: function({commit}, uploadedImages) {
        commit("addFileUploadsForProductCategory", uploadedImages);
    },

    reorderProductCategoryImages: function({commit}, reorderedObj) {
        commit("reorderProductCategoryImages", reorderedObj);
    },

    removeImageFromProductCategory: function({commit}, index) {
        commit("removeImageFromProductCategory", index);
    },

    updateProductCategoryItem: function({commit}, options) {
        commit("updateProductCategoryItem", options);
    },

    saveProductCategory: function({state, commit}, options) {
        let item = Object.assign({}, state.productCategories.item, options);

        commit("setProductCategoriesLoading");

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

    removeProductCategory: function({commit}, id) {
        productCategories.remove(id).then(() => {
            loadProductCategories({commit}, {});
        });
    }
};