function ParseStoreData(goods) {
  let goodsArray = [];
    for (let bag in goods) {
      for (let product in goods[bag].products) {
        goodsArray.push(goods[bag].products[product]);
      }
    }
  return goodsArray;
}

export default ParseStoreData;
