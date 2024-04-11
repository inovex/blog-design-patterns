/** @typedef {{ name: string; mail: string }} ExecutedBy */

/** @typedef {'Open' | 'Paid'} Payment */

/** @typedef {{ name: string; ingredients: string | string[]; orderId: string; paymentType: Payment; executedBy: ExecutedBy, description: string }} Coffee */

/** @typedef {Coffee[]} CoffeeList */

/** @type {CoffeeList} */
const coffeeList = [
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    /*
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        }
    },
    {
        "name": "Flat White",
        "ingredients": [
            "Arabica",
            "Slow brew",
            "Oat milk"
        ],
        "orderId": "#34642",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Café Latte",
        "ingredients": [
            "Robusta",
            "Soya milk"
        ],
        "orderId": "#33467",
        "paymentType": "Paid",
        "executedBy": {
            "name": "Demi Wilkinson",
            "mail": "demi@coffeUi.com"
        },
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    },
    {
        "name": "Espresso",
        "ingredients": "Arabica",
        "orderId": "#12532",
        "paymentType": "Open",
        "executedBy": {
            "name": "Olivia Rhye",
            "mail": "Service #2345"
        },
        "image": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A flat white is a velvety espresso-based coffee drink originating from Australia or New Zealand. It's characterized by its smooth, creamy texture, achieved by microfoam steamed milk poured over a shot of espresso."
    }
    */
];

export { coffeeList };