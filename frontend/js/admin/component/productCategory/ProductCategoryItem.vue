<template>
    <div class="uk-card uk-card-default uk-width-1-2@m">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img class="uk-border-circle" width="40" height="40" src="/img/1.jpg">
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{{productCategory.name}}</h3>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p>{{ productCategory.description }}</p>
        </div>
        <div class="uk-card-footer">
            <a href="#" class="uk-button uk-button-text">Read more</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["productCategory"]
    };
</script>
