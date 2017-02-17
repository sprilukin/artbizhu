<template>
    <div class="uk-card">
        <div class="uk-card-media-top">
            <div class="uk-inline-clip uk-transition-toggle">
                <img class="uk-transition-scale-up uk-transition-opaque" :src="product.src" style="height: 340px" alt="">
            </div>
        </div>
        <div class="uk-card-body">
            <div class="uk-float-left">
                <div class="uk-text-left">Феечка</div>
                <div class="uk-text-left">
                    Цвета:
                </div>
                <ul class="uk-dotnav">
                    <li><a href="" class="uk-red"></a></li>
                    <li><a href="" class="uk-green"></a></li>
                    <li><a href="" class="uk-blue"></a></li>
                    <li><a href="" class="uk-white"></a></li>
                </ul>
            </div>
            <div class="uk-float-right">
                <strike><div class="uk-text-right uk-text-top uk-text-primary uk-text-small">222₴</div></strike>
                <div class="uk-text-right uk-text-top uk-text-success">100₴</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"]
    };
</script>
