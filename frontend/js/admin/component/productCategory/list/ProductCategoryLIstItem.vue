<template>
    <tr>
        <td>{{productCategory.name}}</td>
        <td>{{productCategory.description}}</td>
        <td>
            <router-link :to="editProductCategoryLink(productCategory._id)" uk-icon="icon: file-edit" title="Редактировать" uk-tooltip></router-link>
            <a href="#remove-product-category" uk-toggle class="uk-icon-link" uk-icon="icon: trash" title="Удалить" uk-tooltip></a>
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
            }
        }
    };
</script>
