<template>
    <div class="uk-section uk-section-default uk-margin-xlarge">
        <div class="uk-container uk-flex uk-flex-center">
            <h3><span class="main-title">{{ title }}</span> - это магазин бижутерии и оригинальных сувениров из запекаемой полимерной глины.</h3>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        computed: {
            ...mapState({
                title: (state) => state.title
            })
        }
    }
</script>
