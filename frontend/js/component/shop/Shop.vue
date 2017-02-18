<template>
    <layout>
        <productList></productList>
    </layout>
</template>

<script>
    import WideContainer from "../layout/WideContainer.vue";
    import ProductList from "./ProductList.vue";
    import { mapState } from "vuex"

    export default {
        components: {
            layout: WideContainer,
            productList: ProductList
        }
    };
</script>
