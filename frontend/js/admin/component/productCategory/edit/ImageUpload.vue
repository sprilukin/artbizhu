<template>
    <div class="uk-card uk-card-default uk-card-body">
        <div class="test-upload uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload"></span>
            <span class="uk-text-middle">Attach</span>
            <div uk-form-custom>
                <input type="file" multiple>
                <span class="uk-link">selecting one</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        methods: {
//            ...mapActions({
//                remove: 'removeImageFromProductCategory'
//            })
        }
    };
</script>
