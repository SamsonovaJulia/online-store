function ParseStoreData(goods, category) {
  console.log("goodsArray", category);
  let goodsArray = [];
  if (category === "category1+category2") {
    for (let bag in goods) {
      for (let product in goods[bag].products) {
        goodsArray.push(goods[bag].products[product]);
      }
    }
  } else if (category === "category1") {
    for (let bag in goods.category1) {
      for (let product in goods.category1[bag].products) {
        goodsArray.push(goods.category1[bag].products[product]);
      }
    }
  } else if (category === "category2") {
    for (let bag in goods.category2) {
      for (let product in goods.category2[bag].products) {
        goodsArray.push(goods.category2[bag].products[product]);
      }
    }
  }

  return goodsArray;
}

export default ParseStoreData;
