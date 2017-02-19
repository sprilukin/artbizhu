<template>
    <div>
        <featuredImage url="/img/landing/1_1.jpg"></featuredImage>
        <featuredBlock></featuredBlock>
        <featuredImage url="/img/landing/8_1.jpg"></featuredImage>
        <featuredBlock></featuredBlock>
        <featuredImage url="/img/landing/2.jpg"></featuredImage>
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
