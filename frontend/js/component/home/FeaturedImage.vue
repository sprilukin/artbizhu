<template>
    <div class="uk-background-cover home-page-featured-image" :style="{'background-image': backgroundImage}"></div>
</template>

<script>
    export default {
        props: ["url"],

        computed: {
            backgroundImage: function () {
                return `url('${this.url}')`
            }
        }
    };
</script>