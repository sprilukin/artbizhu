<template>
    <div class="uk-container uk-container-small uk-position-relative">
        <mainTitle></mainTitle>
        <navBar></navBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Head from "./Head.vue";
    import NavBar from "./NavBar.vue";

    export default {
        components: {
            mainTitle: Head,
            navBar: NavBar
        }
    }
</script>
