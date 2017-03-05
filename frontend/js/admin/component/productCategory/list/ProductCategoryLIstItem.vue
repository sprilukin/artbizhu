<template>
    <tr>
        <td>{{productCategory.name}}</td>
        <td>{{productCategory.description}}</td>
        <td>
            <router-link :to="editProductCategoryLink(productCategory._id)" class="uk-icon-link" uk-icon="icon: file-edit" title="Редактировать" uk-tooltip></router-link>
            <a href="#" class="uk-icon-link" uk-icon="icon: trash" title="Удалить" uk-tooltip @click="onRemoveClicked"></a>
        </td>
    </tr>
</template>

<script>
    import navigation from "../../../router/navigation"

    export default {
        props: ["productCategory"],

        methods: {
            editProductCategoryLink: function(id) {
                return `${navigation.all.categories.uri}/${id}`
            },
            onRemoveClicked: function() {
                this.$emit("remove", this.productCategory._id);
            }
        }
    };
</script>
