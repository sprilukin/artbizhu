import { get } from "uicommon/rest/rest";
import url from "uicommon/util/url";


const END_POINT = "/api/productCategories";

export default {
    findAll: function({limit, offset}) {
        let endPoint = url.toUrl(END_POINT, {limit, offset});

        return get(endPoint).then((response) => Promise.resolve(response.json()));
    }
};