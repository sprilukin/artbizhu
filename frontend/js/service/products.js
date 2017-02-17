import { get } from "./rest";

export default {
    getProducts: async function() {
        let response = await get("/api/products");
        return response.json();
    }
}