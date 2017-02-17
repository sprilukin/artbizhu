<template>
    <layout>
        <productList></productList>
    </layout>
</template>

<script>
    import SmallContainer from "../layout/SmallContainer.vue";
    import ProductList from "./ProductList.vue";
    import { mapState } from "vuex"

    export default {
        components: {
            layout: SmallContainer,
            productList: ProductList
        }
    };
</script>
