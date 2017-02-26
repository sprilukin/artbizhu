<template>
    <router-link :to="menuItem.uri" tag="li" :exact="menuItem.exact">
        <a>
            <span class="uk-icon uk-margin-small-right" href="#" :uk-icon="iconAttr"></span>
            {{ menuItem.name }}
            <slot></slot>
        </a>
    </router-link>
</template>

<script>

    export default {
        props: ["menuItem"],

        computed: {
            iconAttr: function() {
                return `icon: ${this.menuItem.icon}`;
            }
        }
    }
</script>
