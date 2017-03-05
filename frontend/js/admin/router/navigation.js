const emptyEntityId = "add";

let allMenuItems = {
    main: {
        "uri": "/", "icon": "home", "name": "Главная", "exact": true
    },
    categories: {
        "uri": "/categories", "icon": "star", "name": "Категории", "exact": false
    },
    addCategory: {
        "uri": `/categories/${emptyEntityId}`
    },
    products: {
        "uri": "/products", "icon": "info", "name": "Товары", "exact": false
    },
    orders: {
        "uri": "/orders", "icon": "credit-card", "name": "Заказы", "exact": false
    }
};

export default {
    all: allMenuItems,
    main: [
        allMenuItems.main,
        allMenuItems.categories,
        allMenuItems.products,
        allMenuItems.orders
    ],
    emptyEntityId: emptyEntityId
};
