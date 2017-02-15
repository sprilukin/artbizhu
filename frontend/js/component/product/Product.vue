<template>
    <div class="uk-card uk-card-hover">
        <div class="uk-card-media-top">
            <img :src="product.src" style="height: 340px" alt="">
        </div>
        <div class="uk-card-body">
            <!--<h3 class="uk-card-title">{{ product.name }}</h3>-->
            <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>-->
            <h6>{{ product.name }}</h6>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"]
    };
</script>
