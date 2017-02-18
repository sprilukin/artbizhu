import { get } from "./rest";

const END_POINT = "/api/products";

export default {
    getProducts: async function() {
        let response = await get(END_POINT);
        return response.json();
    }
}