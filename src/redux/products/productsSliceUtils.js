export const productsSort = (products, orderBy, ascendent) => {
  switch (orderBy) {
    case "price":
      ascendent
        ? products.sort((a, b) => a.price - b.price)
        : products.sort((a, b) => b.price - a.price)
      break;
    default:
      break;
  }
  return products;
}