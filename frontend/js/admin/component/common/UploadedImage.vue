<template>
    <div></div>
</template>

<script>
    export default {
        props: ["image"],
        
        methods: {
        },
        
        mounted: function() {
            this.$el.appendChild(this.image);
        }
    };
</script>
