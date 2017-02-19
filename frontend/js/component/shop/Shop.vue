<template>
    <wideContainer>
        <productList></productList>
    </wideContainer>
</template>

<script>
    import WideContainer from "../layout/WideContainer.vue";
    import ProductList from "./ProductList.vue";
    import { mapState } from "vuex"

    export default {
        components: {
            wideContainer: WideContainer,
            productList: ProductList
        }
    };
</script>
