<template>
    <img :src="url" class="featured-image"/>
</template>

<script>
    export default {
        props: ["url"]
    };
</script>