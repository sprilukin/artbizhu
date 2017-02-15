import { get } from "./rest";

export default {
    getProducts: async function() {
        let response = await get("/products");
        return response.json();
    }
}