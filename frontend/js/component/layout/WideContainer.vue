<template>
    <div class="uk-container uk-container-large uk-position-relative">
        <mainTitle></mainTitle>
        <navBar></navBar>
        <slot></slot>
        <div class="uk-section uk-section-secondary uk-light">
            <div class="uk-container">

                <h3>Section Secondary</h3>

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
    </div>
</template>

<script>
    import Head from "../Head.vue";
    import NavBar from "../navBar/NavBar.vue";

    export default {
        components: {
            mainTitle: Head,
            navBar: NavBar
        }
    }
</script>