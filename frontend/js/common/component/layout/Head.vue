<template>
    <div>
        <h1 id="top" class="uk-heading-primary uk-text-center uk-heading main-title">
            {{ title }}
        </h1>
    </div>
</template>
<script>
    import settings from "common/settings"

    export default {
        computed: {
            title: () => settings.store.name
        },
    }
</script>
