<template>
    <layout>
        <featuredImage url="/img/landing/1.jpg"></featuredImage>
        <div class="uk-section uk-section-default">
            <div class="uk-container">

                <h3>Section Default</h3>

                <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>

            </div>
        </div>
        <featuredImage url="/img/landing/8.jpg"></featuredImage>
        <div class="uk-section uk-section-media">
            <div class="uk-container">

                <h3>Section Media</h3>

                <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import WideContainer from "../layout/WideContainer.vue";
    import FeaturedImage from "./FeaturedImage.vue";

    import { mapState } from "vuex"

    export default {
        components: {
            layout: WideContainer,
            featuredImage: FeaturedImage
        }
    };
</script>
