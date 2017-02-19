<template>
    <div>
        <mainTitle></mainTitle>
        <navBar></navBar>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>

<script>
    import Head from "./Head.vue";
    import Footer from "./Footer.vue";
    import NavBar from "../navBar/NavBar.vue";

    export default {
        components: {
            mainTitle: Head,
            navBar: NavBar,
            foot: Footer
        }
    }
</script>