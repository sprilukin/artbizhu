import { get } from "./rest";
import url from "./util/url";
import { pagination } from "../settings";


const END_POINT = "/api/products";

export default {
    getProducts: async function(limit = pagination.limit, offset = 0) {
        let response = await get(url.toUrl(END_POINT, {limit, offset}));
        return response.json();
    }
}