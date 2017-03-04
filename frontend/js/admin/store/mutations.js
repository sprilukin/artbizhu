export default {
    // addProduct: function(state, productName) {
    //     state.store.products.push({name: productName});
    // },

    setProductCategories: function(state, productCategories) {
        state.productCategories.loading = false;
        state.productCategories.list = productCategories.list;
        state.productCategories.total = productCategories.total;
    },

    setProductCategoriesLoading: function(state) {
        state.productCategories.loading = true;
    },

    setProductCategory: function(state, productCategory) {
        state.productCategories.loading = false;
        state.productCategories.item = productCategory;
    },

    addFileUploadsForProductCategory: function(state, uploadedImages) {
        let item = state.productCategories.item;

        item.images.push.apply(item.images, uploadedImages);
    },

    reorderProductCategoryImages: function(state, reorderedObj) {
        let item = state.productCategories.item;

        let images = reorderedObj.reduce(function(memo, entry) {
            memo[entry.newIndex] = item.images[entry.oldIndex];

            return memo;
        }, []);

        item.images.splice(0, item.images.length, ...images);
    }
};