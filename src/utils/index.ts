import { Product } from "../Models/Products";
/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */

export const totalPrice = (products: Product[]): number => {
    let sum = 0;
    products.forEach((product) => (sum += product.price));
    return sum;
};
