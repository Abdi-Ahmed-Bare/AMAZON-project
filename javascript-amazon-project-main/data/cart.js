export const cart = [];

// check if item is already in the cart
// if it is, increase the quantity by 1
// if it is not, add the item to the cart with a quantity of 1


export function addToCart(productId){

  let matchingItem;

  cart.forEach((cartItem) => {
   if (productId === cartItem.productId){
   matchingItem = cartItem;  // flaging the similar items
   }
  });

  if (matchingItem){
    matchingItem.quantity += 1; 
  }
  else{
    cart.push({
      productId: productId,
      quantity: 1
        });
  }
}