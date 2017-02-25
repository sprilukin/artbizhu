<template>
    <mainLayout>
        <router-view></router-view>
    </mainLayout>
</template>

<script>
    import MainLayout from "./layout/MainLayout.vue";

    export default {
        components: {
            mainLayout: MainLayout
        }
    }
</script>