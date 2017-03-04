import productCategories from "../service/productCategories";

export default {
    loadProductCategories: function({commit}, options) {
        commit("setProductCategoriesLoading");

        productCategories.findAll(options).then((productCategories) => commit("setProductCategories", productCategories));
    },

    loadProductCategory: function({commit}, id) {
        commit("setProductCategoriesLoading");

        productCategories.findById(id).then((productCategory) => {
            productCategory.images = productCategory.images.map((image) => Object.assign({
                id: image.uri
            }, image));

            commit("setProductCategory", productCategory);
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

    saveProductCategory: function({state, commit}) {
        let item = state.productCategories.item;

        if (item._id) {
            productCategories.update(item).then((result) => {
                console.log(result);
            });
        } else {
            productCategories.save(item).then((result) => {
                console.log(result);
            });
        }
    }
};