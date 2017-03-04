<template>
    <div></div>
</template>

<script>
    import imageUtil from "../../../util/imageUtil";

    export default {
        props: ["image"],
        
        methods: {
        },
        
        mounted: function() {
            this.$el.appendChild(this.image.image);
        }
    };
</script>
