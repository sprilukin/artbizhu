<template>
    <div>
        <div class="uk-background-cover home-page-featured-logo">
        </div>
        <div>
            <navBar></navBar>
            <productList></productList>
        </div>
    </div>
</template>

<script>
    import ProductList from "../shop/ProductList.vue";
    import NavBar from "../navBar/NavBar.vue";

    import { mapState } from "vuex"

    export default {
        components: {
            productList: ProductList,
            navBar: NavBar
        }
    };
</script>
