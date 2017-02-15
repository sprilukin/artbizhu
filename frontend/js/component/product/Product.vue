<template>
    <div class="uk-card uk-card-hover">
        <div class="uk-card-media-top">
            <img :src="product.src" style="height: 340px" alt="">
        </div>
        <div class="uk-card-body">
            <table class="uk-table">
                <tbody>
                <tr>
                    <td><h6 class="uk-text-left">Феечка</h6></td>
                    <td>
                        <strike><div class="uk-text-right uk-text-top uk-text-primary uk-text-small">222₴</div></strike>
                        <div class="uk-text-right uk-text-top uk-text-success">100₴</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"]
    };
</script>
