function getProductsByCategories(goods, categories) {
  if (!goods) {
    return [];
  }
  let goodsArray = [];

  Object.keys(categories).forEach((category) => {
    if (categories[category]) {
      for (let product in goods[category].products) {
        goodsArray.push(goods[category].products[product]);
      }
    }
  });
  return goodsArray;
}

export default getProductsByCategories;
