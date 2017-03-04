import productCategories from "../service/productCategories";

function loadProductCategoryItem(commit, productCategory) {
    productCategory.images = productCategory.images.map((image) => Object.assign({
        id: image.uri
    }, image));

    commit("setProductCategory", productCategory);
}

export default {
    loadProductCategories: function({commit}, options) {
        commit("setProductCategoriesLoading");

        productCategories.findAll(options).then((productCategories) => commit("setProductCategories", productCategories));
    },

    loadProductCategory: function({commit}, id) {
        commit("setProductCategoriesLoading");

        productCategories.findById(id).then((productCategory) => {
            loadProductCategoryItem(commit, productCategory);
        });
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
                loadProductCategoryItem(commit, productCategory);
            });
        }
    }
};