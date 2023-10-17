"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(priceBracket) {
    switch (priceBracket) {
        case orders_1.PriceBracket.Low:
            return 10;
            break;
        case orders_1.PriceBracket.Medium:
            return 20;
            break;
        case orders_1.PriceBracket.High:
            return 30;
            break;
        default:
            console.log("This is not a valid input");
    }
    return 0;
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders[0].filter((order) => order.price <= getMaxPrice(price));
    orders.forEach((restaurant) => {
        const result = restaurant.filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(result);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOders(restaurants, orders) {
    restaurants.forEach((restaurant, index) => {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach((order) => {
                console.log(`- ${order.name} : ${order.price}`);
            });
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOders(restaurants_1.restaurants, elligibleOrders);
//# sourceMappingURL=app.js.map