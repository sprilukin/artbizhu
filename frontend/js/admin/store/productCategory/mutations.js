import mutationNames from "./mutationNamesEnum";

export default {
    [mutationNames.SET_PRODUCT_CATEGORIES]: function(state, productCategories) {
        state.loading = false;
        state.list = productCategories.list;
        state.total = productCategories.total;
    },

    [mutationNames.SET_PRODUCT_CATEGORIES_LOADING]: function(state) {
        state.loading = true;
    },

    [mutationNames.SET_PRODUCT_CATEGORY]: function(state, productCategory) {
        state.loading = false;
        state.item = productCategory;
    },

    [mutationNames.UPDATE]: function(state, item) {
        Object.assign(state.updatedItem, item);
    },

    [mutationNames.ADD_IMAGES]: function(state, uploadedImages) {
        let item = state.item;

        item.images.push.apply(item.images, uploadedImages);
    },

    [mutationNames.REORDER_IMAGES]: function(state, reorderedObj) {
        let item = state.item;

        let images = reorderedObj.reduce(function(memo, entry) {
            memo[entry.newIndex] = item.images[entry.oldIndex];

            return memo;
        }, []);

        item.images.splice(0, item.images.length, ...images);
    },

    [mutationNames.REMOVE_IMAGE]: function(state, index) {
        state.item.images.splice(index, 1);
    }
};