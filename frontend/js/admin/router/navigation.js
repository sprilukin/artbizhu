let allMenuItems = {
    main: {
        "uri": "/", "icon": "home", "name": "Главная", "exact": true
    },
    categories: {
        "uri": "/category", "icon": "star", "name": "Категории", "exact": false
    },
    products: {
        "uri": "/info", "icon": "info", "name": "Товары", "exact": false
    },
    orders: {
        "uri": "/payment", "icon": "credit-card", "name": "Заказы", "exact": false
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
