export default function setToCart(item) {
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const cart = !shoppingCart ? [] : shoppingCart.map((itemCart) => (itemCart));
  if (shoppingCart !== null && shoppingCart !== []) {
    cart.push(item);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  } else {
    const NewCart = [];
    NewCart.push(item);
    localStorage.setItem('shoppingCart', JSON.stringify(NewCart));
  }
}
