<template>
    <div class="uk-card uk-card-default uk-card-body">
        <button class="uk-modal-close-default uk-close" type="button" uk-close="" @click="onRemoveClicked"></button>
        <!--<img :src="image.uri" alt="" class="uk-transition-scale-up uk-transition-opaque">-->
        <img src="/img/4.jpg" alt="" class="uk-transition-scale-up uk-transition-opaque" width="100">
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        props: ["image", "index"],

        components: {
        },

        computed: {
        },

        methods: {
//            ...mapActions({
//                remove: 'removeImageFromProductCategory'
//            })
            onRemoveClicked: function() {
                console.log(this.index);
            }
        }
    };
</script>
