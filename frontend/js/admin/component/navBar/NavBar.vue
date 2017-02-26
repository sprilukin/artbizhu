<template>
    <div class="uk-navbar-container uk-navbar-transparent">
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">
                <div class="uk-navbar-center">
                    <ul class="uk-navbar-nav">
                        <template v-for="menuItem in menuItems">
                            <navBarItem :uri="menuItem.uri" :icon="menuItem.icon" :name="menuItem.name" :exact="menuItem.exact"></navBarItem>
                        </template>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import NavBarItem from "uicommon/component/navBar/NavBarItem.vue";
    import navigation from "../../router/navigation"

    export default {
        components: {
            navBarItem: NavBarItem
        },

        computed: {
            menuItems: function() {
                return navigation.main;
            }
        }
    }
</script>
