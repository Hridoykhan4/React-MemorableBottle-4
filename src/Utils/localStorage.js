const getCartItems = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToLS = (id) => {
  const cart = getCartItems();
  cart.push(id);
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getCartItems();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

export { getCartItems, addToLS, saveCartToLS, removeFromLS };
