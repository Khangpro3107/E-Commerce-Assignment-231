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
        const newState = state.map((x) =>
          x.id === savedProduct.id ? { ...x, qty: x.qty + 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      } else {
        const newState = [...state, { ...savedProduct, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }
    case "DELITEM":
      const exist2 = state.find((x) => x.id === savedProduct.id);
      if (exist2.qty === 1) {
        const newState = state.filter((x) => x.id !== exist2.id);
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      } else {
        const newState = state.map((x) =>
          x.id === savedProduct.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }
    case "SET":
      const count = action.payload.count;
      const productId = action.payload.id;
      return state.map((product) => {
        if (product.id === productId) return { ...product, qty: count };
        else return product;
      });
    default:
      return state;
  }
};

export default handleCart;
