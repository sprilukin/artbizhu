<template>
    <wideContainer>
        <productList :page="page"></productList>
    </wideContainer>
</template>

<script>
    import WideContainer from "uicommon/component/layout/WideContainer.vue";
    import ProductList from "./ProductList.vue";
    import { mapState } from "vuex"

    export default {
        props: ["page"],

        components: {
            wideContainer: WideContainer,
            productList: ProductList
        }
    };
</script>
