<template>
    <ul class="uk-breadcrumb">
        <li>
            <router-link :to="categoryLink">
                Категории
            </router-link>
        </li>
        <li>
            <span href="#">{{productCategory.name}}</span>
        </li>
    </ul>
</template>

<script>
    import navigation from "../../../router/navigation";

    export default {
        props: ["productCategory"],

        computed: {
            categoryLink() {
                return navigation.all.categories.uri
            }
        },
    };
</script>
