let allMenuItems = {
    main: {
        "uri": "/", "icon": "home", "name": "Главная"
    },
    store: {
        "uri": "/store", "icon": "star", "name": "Магазин"
    },
    contacts: {
        "uri": "/info", "icon": "info", "name": "Контакты"
    },
    payment: {
        "uri": "/payment", "icon": "credit-card", "name": "Оплата и доставка"
    },
    feedback: {
        "uri": "/reviews", "icon": "happy", "name": "Отзывы"
    },
    cart: {
        "uri": "/cart", "icon": "cart", "name": "Корзина"
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
