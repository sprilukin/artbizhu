import url from "uicommon/util/url";
import { get, deleteItem, resolveList, resolveSingle, multipart } from "uicommon/rest/rest";
import _ from "lodash";


const END_POINT = "/api/productCategories";

function convertImagesToUpdate(images) {
    let index = 0;

    return images.map((image) => {
        if (!image.file) {
            return {
                uri: image.uri
            };
        } else {
            return {
                file: true,
                index: index++
            };
        }
    }, []);
}

function createFormDataForProductCategory(productCategory) {
    let imagesToUpdate = convertImagesToUpdate(productCategory.images);

    const formData = new FormData();

    formData.append("productCategory", JSON.stringify(Object.assign({
        images: imagesToUpdate
    }, _.pick(productCategory, ["_id", "__v", "name", "description"]))));

    let imagesToUpload = productCategory.images.filter((image) => image.file);

    imagesToUpload.forEach((image) => {
        if (image.file) {
            formData.append("image", image.file);
        }
    });

    return formData;
}

export default {
    findAll: function({limit, offset}) {
        let endPoint = url.toUrl(END_POINT, {limit, offset});

        return get(endPoint).then(resolveList);
    },

    findById: function(id) {
        let endPoint = `${END_POINT}/${id}`;

        return get(endPoint).then(resolveSingle);
    },

    save: function(productCategory) {
        const formData = createFormDataForProductCategory(productCategory);

        return multipart({
            endPoint: END_POINT,
            method: "POST",
            formData: formData
        }).then(resolveSingle);
    },

    update: function(productCategory) {
        let endPoint = `${END_POINT}/${productCategory._id}`;

        const formData = createFormDataForProductCategory(productCategory);

        return multipart({
            endPoint: endPoint,
            method: "PUT",
            formData: formData
        }).then(resolveSingle);
    },

    remove: function(id) {
        let endPoint = `${END_POINT}/${id}`;

        return deleteItem(endPoint).then(resolveSingle);
    }
};