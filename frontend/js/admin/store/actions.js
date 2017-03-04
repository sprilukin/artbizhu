import productCategories from "../service/productCategories";

export default {
    // addProduct: async function({commit}, productName) {
    //     function delay(ms) {
    //         return new Promise(function(resolve) {
    //             setTimeout(() => {
    //                 resolve();
    //             }, ms);
    //         });
    //     }
    //
    //     await delay(1000);
    //     commit("addProduct", productName);
    // },

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
    }
};