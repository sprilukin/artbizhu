<template>
    <div>
        <!-- big devices menu -->
        <div class="uk-navbar-container uk-navbar-transparent uk-visible@m">
            <div class="uk-container uk-container-expand">
                <nav class="uk-navbar">
                    <div class="uk-navbar-center">
                        <ul class="uk-navbar-nav uk-visible@m">
                            <template v-for="navBarItem in navBarItems">
                                <navBarItem :uri="navBarItem.uri" :icon="navBarItem.icon" :name="navBarItem.name"></navBarItem>
                            </template>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <!-- small devices menu -->
        <ul uk-tab class="uk-hidden@m">
            <template v-for="navBarItem in navBarItems">
                <navBarItem :uri="navBarItem.uri" :icon="navBarItem.icon" :name="navBarItem.name"></navBarItem>
            </template>
        </ul>
    </div>
</template>

<script>
    import NavBarItem from "./NavBarItem.vue";
    import navigation from "../../router/navigation.json"

    export default {
        components: {
            navBarItem: NavBarItem
        },

        computed: {
            navBarItems: function() {
                return navigation.main;
            }
        }
    }
</script>
