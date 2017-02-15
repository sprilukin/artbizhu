<template>
    <div uk-sticky class="uk-navbar-container tm-navbar-container uk-sticky uk-active">
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav uk-visible@m">
                        <li>
                            <router-link active-class="uk-active" to="/">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: home"></span>
                                Главная
                            </router-link>
                        </li>
                        <li>
                            <router-link active-class="uk-active" to="/addProduct">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: star"></span>
                                Магазин
                            </router-link>
                        </li>
                        <li>
                            <router-link active-class="uk-active" to="/">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: info"></span>
                                Контакты
                            </router-link>
                        </li>
                        <li>
                            <router-link active-class="uk-active" to="/">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: credit-card"></span>
                                Оплата и доставка
                            </router-link>
                        </li>
                        <li>
                            <router-link active-class="uk-active" to="/">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: happy"></span>
                                Отзывы
                            </router-link>
                        </li>
                        <li>
                            <router-link active-class="uk-active" to="/">
                                <span class="uk-icon uk-margin-small-right" href="#" uk-icon="icon: cart"></span>
                                Корзина
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

    export default {
    }
</script>
