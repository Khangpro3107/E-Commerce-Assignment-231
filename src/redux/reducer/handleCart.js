const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  const savedProduct = { id: product?.id };
  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      const exist = state.find((x) => x.id === savedProduct.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === savedProduct.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...savedProduct, qty: 1 }];
      }
    case "DELITEM":
      const exist2 = state.find((x) => x.id === savedProduct.id);
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state.map((x) =>
          x.id === savedProduct.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
