<template>
    <div>
        <div v-show="!loading">
            <table class="uk-table uk-table-small uk-table-middle">
                <caption class="uk-text-center">Категории</caption>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="productCategory in productCategories">
                    <td>{{productCategory.name}}</td>
                    <td>{{productCategory.description}}</td>
                    <td>
                        <a href="#update-product-category" uk-toggle class="uk-icon-link uk-margin-small-right" uk-icon="icon: file-edit" title="Редактировать" uk-tooltip></a>
                        <a href="#remove-product-category" uk-toggle class="uk-icon-link" uk-icon="icon: trash" title="Удалить" uk-tooltip></a>
                    </td>
                </tr>
                </tbody>
            </table>

            <pagination :page="page" :total="total" :pageSize="pageSize"></pagination>

            <updateProductCategory></updateProductCategory>
            <confirm id="remove-product-category"></confirm>
        </div>
        <loading v-show="loading"></loading>
    </div>
</template>

<script>
    import Pagination from "uicommon/component/pagination/Pagination.vue";
    import UpdateProductCategory from "./UpdateProductCategory.vue";
    import Confirm from "../modal/Confirm.vue";
    import Loading from "uicommon/component/loading/Loading.vue";
    import { mapState, mapActions } from "vuex"
    import pagination from "uicommon/util/pagination";
    import settings from "common/settings";

    export default {
        props: ["page"],

        components: {
            pagination: Pagination,
            loading: Loading,
            updateProductCategory: UpdateProductCategory,
            confirm: Confirm
        },

        computed: {
            ...mapState({
                productCategories: (state) => state.productCategories.list,
                loading: (state) => state.productCategories.loading,
                total: (state) => state.productCategories.total
            }),
            pageSize: () => settings.pagination.limit,
            offset: function() {
                return pagination.getOffsetByPage(this.page)
            }
        },

        methods: {
            ...mapActions({
                loadProductCategories: 'loadProductCategories'
            }),
            loadProductsForCurrentPage: function() {
                this.loadProductCategories({
                    offset: this.offset
                });
            }
        },

        watch: {
            page: function () {
                this.loadProductsForCurrentPage();
            }
        },

        created: function() {
            this.loadProductsForCurrentPage();
        }
    };
</script>
