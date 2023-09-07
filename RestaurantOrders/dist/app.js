"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
/// Add your printOrders() function below:
/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
//# sourceMappingURL=app.js.map