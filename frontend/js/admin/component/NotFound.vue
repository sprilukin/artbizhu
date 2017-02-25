<template>
    <mainLayout>
        <notFound></notFound>
    </mainLayout>
</template>

<script>
    import MainLayout from "./layout/MainLayout.vue";
    import NotFound from "uicommon/component/NotFound.vue";

    export default {
        components: {
            mainLayout: MainLayout,
            notFound: NotFound
        }
    }
</script>