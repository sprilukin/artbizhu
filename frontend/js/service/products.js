import { get } from "./rest";
import url from "../util/url";


const END_POINT = "/api/products";

export default {
    getProducts: function({limit, offset}) {
        let endPoint = url.toUrl(END_POINT, {limit, offset});

        return get(endPoint).then((response) => Promise.resolve(response.json()));
    }
};