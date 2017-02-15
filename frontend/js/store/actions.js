export default {
    addProduct: async function addProduct({commit}, productName) {
        function delay(ms) {
            return new Promise(function(resolve) {
                setTimeout(() => {
                    resolve();
                }, ms);
            });
        }

        await delay(1000);
        commit("addProduct", productName);
    }
};