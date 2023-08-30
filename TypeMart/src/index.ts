import products from './products'; 

let productName: string = products[2].name; 
// let product: any = products.find(name => name == productName);
let product: any = products.find(element => element.name === productName); 

if(product.preOrder === 'true')
    console.log("We'll send you when your item it's on the way")

let shipping: number; 
let taxPercent: number; 
let taxTotal: number; 
let total: number; 
let shippingAddress: string = "1200, Av Thérèse-Lavoie-Roux, Montreal, Quebec"

if(product.price > 25)
{
    console.log("You won a free shipping.");
    shipping = 0; 
}
else 
{ 
    shipping = 5; 
}


if (shippingAddress.toLowerCase().match("new york")?.[0] === "new york")
{
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
            Total Amount: $${total}`)