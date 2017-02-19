import { get } from "./rest";
import url from "../util/url";


const END_POINT = "/api/products";

export default {
    getProducts: async function({limit, offset}) {
        let response = await get(url.toUrl(END_POINT, {limit, offset}));
        return response.json();
    }
}