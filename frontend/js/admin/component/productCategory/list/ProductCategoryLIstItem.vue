<template>
    <tr>
        <td>{{productCategory.name}}</td>
        <td>{{productCategory.description}}</td>
        <td>
            <router-link :to="editProductCategoryLink" class="uk-icon-link" uk-icon="icon: file-edit" title="Редактировать" uk-tooltip></router-link>
            <a href="#" class="uk-icon-link" uk-icon="icon: trash" title="Удалить" uk-tooltip @click="onRemoveClicked"></a>
        </td>
    </tr>
</template>

<script>
    import navigation from "../../../router/navigation"

    export default {
        props: ["productCategory"],

        computed: {
            editProductCategoryLink: function() {
                return `${navigation.all.categories.uri}/${this.productCategory._id}`
            }
        },

        methods: {
            onRemoveClicked: function() {
                this.$emit("remove", this.productCategory._id);
            }
        }
    };
</script>
