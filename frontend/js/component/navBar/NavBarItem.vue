<template>
    <li>
        <router-link active-class="uk-active" :to="uri">
            <span class="uk-icon uk-margin-small-right" href="#" :uk-icon="iconAttr"></span>
            {{ name }}
            <slot></slot>
        </router-link>
    </li>
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
