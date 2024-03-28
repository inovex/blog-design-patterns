/** @typedef {{ name: string; mail: string }} ExecutedBy */

/** @typedef {'Open' | 'Paid'} Payment */

/** @typedef {{ name: string; ingredients: string | string[]; orderId: string; paymentType: Payment; executedBy: ExecutedBy }} Coffee */

/** @typedef {Coffee[]} CoffeeList */

/** @type {CoffeeList} */
const coffeeList = [
    { name: 'Espresso', ingredients: 'Arabica', orderId: '#12532', paymentType: 'Open', executedBy: { name: 'Olivia Rhye', mail: 'Service #2345' } },
    { name: 'Flat White', ingredients: ['Arabica', 'Slow brew', 'Oat milk'], orderId: '#34642', paymentType: 'Paid', executedBy: { name: 'Olivia Rhye', mail: 'Service #2345' } },
    { name: 'Café Latte', ingredients: ['Robusta', 'Soya milk'], orderId: '#33467', paymentType: 'Paid', executedBy: { name: 'Demi Wilkinson', mail: 'demi@coffeUi.com' } }
];

export { coffeeList };