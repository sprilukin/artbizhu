<template>
    <div>
        <mainTitle></mainTitle>
        <navBar></navBar>
        <slot></slot>
    </div>
</template>

<script>
    import Head from "uicommon/component/layout/Head.vue";
    import NavBar from "../navBar/NavBar.vue";

    export default {
        components: {
            mainTitle: Head,
            navBar: NavBar
        }
    }
</script>