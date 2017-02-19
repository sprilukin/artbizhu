<template>
    <div class="uk-hidden@m uk-margin">
        <button class="uk-button uk-button-default" type="button">Меню</button>
        <div uk-dropdown>
            <ul class="uk-nav uk-dropdown-nav">
                <template v-for="menuItem in menuItems">
                    <navBarItem :uri="menuItem.uri" :icon="menuItem.icon" :name="menuItem.name"></navBarItem>
                </template>
            </ul>
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
