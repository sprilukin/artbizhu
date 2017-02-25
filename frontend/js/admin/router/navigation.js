let allMenuItems = {
    main: {
        "uri": "/", "icon": "home", "name": "Главная"
    },
    categories: {
        "uri": "/store", "icon": "star", "name": "Категории"
    },
    products: {
        "uri": "/info", "icon": "info", "name": "Товары"
    },
    orders: {
        "uri": "/payment", "icon": "credit-card", "name": "Заказы"
    }
};

export default {
    main: [
        allMenuItems.main,
        allMenuItems.categories,
        allMenuItems.products,
        allMenuItems.orders
    ]
};
