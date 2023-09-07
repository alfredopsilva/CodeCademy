import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(priceBracket: PriceBracket): number { 
      switch(priceBracket){
            case PriceBracket.Low:
                  return 10; 
                  break; 
            case PriceBracket.Medium:
                  return 20;
                  break; 
            case PriceBracket.High: 
                  return 30; 
                  break; 
            default: 
                  console.log("This is not a valid input")
      }
      return 0; 
}
/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders[][]: Order): Order[][]{ 
      let filteredOrders: Order[][] = [];


      return filteredOrders; 
}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
