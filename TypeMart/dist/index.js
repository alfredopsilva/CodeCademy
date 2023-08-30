"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let productName = products_1.default[2].name;
let product = products_1.default.find(element => element.name === productName);
if (product.preOrder === 'true')
    console.log("We'll send you when your item it's on the way");
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "1200, Av Thérèse-Lavoie-Roux, Montreal, Quebec";
if (product.price > 25) {
    console.log("You won a free shipping.");
    shipping = 0;
}
else {
    shipping = 5;
}
if (((_a = shippingAddress.toLowerCase().match("new york")) === null || _a === void 0 ? void 0 : _a[0]) === "new york") {
    taxPercent = .1;
}
else {
    taxPercent = .05;
}
taxTotal = (product.price * taxPercent);
total = taxTotal + Number(product.price) + shipping;
console.log(`Product Name: ${product.name}
            Shipping address: ${shippingAddress}
            Price of the Product: $${product.price}
            Tax Total: $${taxTotal}
            Shipping: $${shipping}
            Total Amount: $${total}`);
