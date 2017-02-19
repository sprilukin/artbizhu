<template>
    <div>
        <featuredImage url="/img/landing/1.jpg"></featuredImage>
        <featuredBlock></featuredBlock>
        <featuredImage url="/img/landing/8.jpg"></featuredImage>
        <featuredBlock></featuredBlock>
    </div>
</template>

<script>
    import FeaturedImage from "./FeaturedImage.vue";
    import FeaturedBlock from "./FeaturedBlock.vue";

    import { mapState } from "vuex"

    export default {
        components: {
            featuredImage: FeaturedImage,
            featuredBlock: FeaturedBlock
        }
    };
</script>
