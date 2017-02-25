<template>
    <wideContainer>
        <div class="uk-section uk-section-default">
            <div class="uk-container">
                <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
                    <div>
                        <h3 class="uk-card-title">Обратная связь</h3>
                        <p>handrcafted@gmail.com</p>
                    </div>
                    <div>
                        <h3 class="uk-card-title">Тех поддержка</h3>
                        <p>admin@handcrafted.com</p>
                    </div>
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
