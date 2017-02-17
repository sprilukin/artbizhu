<template>
    <div class="uk-container uk-container-large uk-position-relative">
        <mainTitle></mainTitle>
        <navBar></navBar>
        <slot></slot>
    </div>
</template>

<script>
    import Head from "../Head.vue";
    import NavBar from "../navBar/NavBar.vue";

    export default {
        components: {
            mainTitle: Head,
            navBar: NavBar
        }
    }
</script>