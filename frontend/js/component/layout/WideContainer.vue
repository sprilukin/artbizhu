<template>
    <div>
        <mainTitle></mainTitle>
        <navBar></navBar>

        <slot name="header"></slot>

        <div class="uk-container uk-container-large uk-position-relative">
            <slot></slot>
        </div>

        <slot name="footer"></slot>
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