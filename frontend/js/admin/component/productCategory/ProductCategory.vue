<template>
    <div>
        <div v-if="!loading">
            <form>
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">{{productCategory.name}}</legend>

                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Input">
                    </div>

                    <div class="uk-margin">
                        <select class="uk-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>

                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                    </div>

                    <div class="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
                        <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
                        <label><input class="uk-radio" type="radio" name="radio2"> B</label>
                    </div>

                    <div class="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
                        <label><input class="uk-checkbox" type="checkbox" checked> A</label>
                        <label><input class="uk-checkbox" type="checkbox"> B</label>
                    </div>

                </fieldset>
            </form>

            <div uk-grid class="uk-flex-center">
                <router-link to="/category" class="uk-button uk-button-default">
                    <span uk-icon="icon: arrow-left"></span>
                    К категориям
                </router-link>
                <button class="uk-button uk-button-primary" type="button">
                    <span uk-icon="icon: push"></span>
                    Сохранить
                </button>
            </div>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import Loading from "uicommon/component/loading/Loading.vue";

    export default {
        props: ["id"],

        components: {
            loading: Loading
        },

        computed: {
            ...mapState({
                productCategory: (state) => state.productCategories.item,
                loading: (state) => state.productCategories.loading
            })
        },

        methods: {
            ...mapActions({
                loadProductCategory: 'loadProductCategory'
            }),
            loadCurrentProductCategory: function() {
                this.loadProductCategory(this.id);
            }
        },

        watch: {
            id: function () {
                this.loadCurrentProductCategory();
            }
        },

        created: function() {
            this.loadCurrentProductCategory();
        }
    };
</script>
