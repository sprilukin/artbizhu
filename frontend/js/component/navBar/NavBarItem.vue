<template>
    <router-link :to="uri" tag="li" exact>
        <a>
            <span class="uk-icon uk-margin-small-right" href="#" :uk-icon="iconAttr"></span>
            {{ name }}
            <slot></slot>
        </a>
    </router-link>
</template>

<script>

    export default {
        props: ["uri", "name", "icon"],

        computed: {
            iconAttr: function() {
                return "icon: " + this.icon;
            }
        }
    }
</script>
