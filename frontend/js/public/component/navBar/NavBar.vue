<template>
    <div>
        <!-- big devices menu -->
        <bigScreenNavBar class="uk-visible@m" :menuItems="navBarItems"></bigScreenNavBar>
        <smallScreenNavBar class="uk-hidden@m" :menuItems="navBarItems"></smallScreenNavBar>
    </div>
</template>

<script>
    import BigScreenNavBar from "./BigScreenNavBar.vue";
    import SmallScreenNavBar from "./SmallScreenNavBar.vue";
    import navigation from "../../router/navigation"

    export default {
        components: {
            bigScreenNavBar: BigScreenNavBar,
            smallScreenNavBar: SmallScreenNavBar
        },

        computed: {
            navBarItems: function() {
                return navigation.main;
            }
        }
    }
</script>
