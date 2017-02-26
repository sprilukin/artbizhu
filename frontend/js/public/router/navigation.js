let allMenuItems = {
    main: {
        "uri": "/", "icon": "home", "name": "Главная", "exact": true
    },
    store: {
        "uri": "/store", "icon": "star", "name": "Магазин", "exact": false
    },
    contacts: {
        "uri": "/info", "icon": "info", "name": "Контакты", "exact": false
    },
    payment: {
        "uri": "/payment", "icon": "credit-card", "name": "Оплата и доставка", "exact": false
    },
    feedback: {
        "uri": "/reviews", "icon": "happy", "name": "Отзывы", "exact": false
    },
    cart: {
        "uri": "/cart", "icon": "cart", "name": "Корзина", "exact": false
    }
};

export default {
    all: allMenuItems,
    main: [
        allMenuItems.main,
        allMenuItems.store,
        allMenuItems.contacts,
        allMenuItems.payment,
        allMenuItems.feedback,
        allMenuItems.cart
    ],
    footer: [
        allMenuItems.contacts,
        allMenuItems.payment,
        allMenuItems.feedback
    ]
};
