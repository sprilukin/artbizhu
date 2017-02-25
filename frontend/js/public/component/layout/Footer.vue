<template>
    <div class="uk-section uk-section-secondary uk-light">
        <div class="uk-container">
            <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
                <div>
                    <h3 class="main-title">
                        {{ title }}
                    </h3>

                    <div>© 2017</div>
                    <div>handrcafted.com</div>
                    <div>handrcafted@gmail.com</div>
                </div>
                <div>
                    <h3>Помощь</h3>
                    <template v-for="menuItem in menuItems">
                        <router-link :to="menuItem.uri" exact>{{menuItem.name}}</router-link>
                    </template>
                </div>
                <div>
                    <h3>Мы в соцсетях</h3>
                    <div>
                        <a href="https://www.facebook.com/groups/509181309239215/" target="_blank" class="uk-icon-button  uk-margin-small-right" uk-icon="icon: facebook"></a>
                        <a href="/" class="uk-icon-button uk-margin-small-right" uk-icon="icon: instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navigation from "../../router/navigation";
    import { mapState } from "vuex";

    export default {
        computed: {
            menuItems: function() {
                return navigation.footer;
            },
            ...mapState({
                title: (state) => state.title
            })
        }
    }
</script>