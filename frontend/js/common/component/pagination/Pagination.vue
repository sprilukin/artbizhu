<template>
    <div class="uk-flex uk-flex-center uk-margin-large-bottom">
        <div class="uk-container uk-container-small">
            <ul class="uk-pagination">
                <li :class="{'uk-disabled': !hasPrevious}">
                    <router-link :to="{ query: { page: previous } }">
                        <span class="uk-margin-small-right" uk-pagination-previous></span>
                        Назад
                    </router-link>
                </li>
                <li :class="{'uk-disabled': !hasNext}">
                    <router-link :to="{ query: { page: next } }">
                        Вперед
                        <span class="uk-margin-small-left" uk-pagination-next></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["page", "pageSize", "total"],

        computed: {
            hasPrevious: function() {
                return this.page > 0;
            },
            hasNext: function() {
                return this.page * this.pageSize < this.total;
            },
            previous: function() {
                return this.page - 1;
            },
            next: function() {
                return this.page + 1;
            }
        }
    };
</script>
