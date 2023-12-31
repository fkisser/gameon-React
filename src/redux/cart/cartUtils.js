export const addProduct = (cartItems, product) => {
  if (!cartItems) cartItems = [];
  const cartProduct = cartItems.find((cartItem) => {
    return cartItem.id === product.id
  })
  return cartProduct ?
    cartItems?.map((cartItem) => {
      return cartItem.id === cartProduct.id
        ? {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
        : cartItem
    }) :
    [
      ...cartItems,
      {
        ...product,
        quantity: 1
      }
    ]
}

export const removeProduct = (cartItems, id) => {
  const productToRemove = cartItems.find((item) => item.id === id);

  return (productToRemove.quantity > 1) ?
    cartItems.map((item) => {
      return item.id === productToRemove.id
        ? {
          ...item,
          quantity: item.quantity - 1
        }
        : item
    }) :
    cartItems.filter((item) => item.id !== productToRemove.id)
}

export const updateProducts = (cartItems, products) => {
  return (products?.length && cartItems?.length) ? (
    cartItems?.map((cartItem) => {
      const { price } = products.find((product) => {
        return product.id == cartItem.id
      })
      if (price) return {
        ...cartItem,
        price: price
      }
    })) : cartItems
}