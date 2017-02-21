<template>
    <wideContainer>
        <div class="uk-card uk-card-default uk-child-width-1-2@m uk-grid-small uk-grid-match uk-flex-center" uk-grid>
            <div>
                <div class="uk-card uk-card-body">
                    <h3 class="uk-card-title">Обратная связь</h3>
                    <p>handrcafted@gmail.com</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-body">
                    <h3 class="uk-card-title">Тех поддержка</h3>
                    <p>admin@handcrafted.com</p>
                </div>
            </div>
        </div>
    </wideContainer>
</template>

<script>
    import WideContainer from "../layout/WideContainer.vue";

    export default {
        components: {
            wideContainer: WideContainer,
        }
    };
</script>
