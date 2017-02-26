<template>
    <div :id="id" uk-modal="center: true">
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <div class="uk-modal-header">
                <h2 class="uk-modal-title">Подтверждение</h2>
            </div>
            <div class="uk-modal-body">
                <p>Вы уверены?</p>
            </div>
            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">Нет</button>
                <button class="uk-button uk-button-primary" type="button">Да</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["id"],

        components: {
        },

        computed: {
        },

        methods: {
        }
    };
</script>
