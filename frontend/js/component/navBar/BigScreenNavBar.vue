<template>
    <div class="uk-navbar-container uk-navbar-transparent">
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">
                <div class="uk-navbar-center">
                    <ul class="uk-navbar-nav">
                        <template v-for="menuItem in menuItems">
                            <navBarItem :uri="menuItem.uri" :icon="menuItem.icon" :name="menuItem.name"></navBarItem>
                        </template>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import NavBarItem from "./NavBarItem.vue";

    export default {

        props: ["menuItems"],

        components: {
            navBarItem: NavBarItem
        }
    }
</script>
