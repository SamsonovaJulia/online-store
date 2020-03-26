function ParseStoreData(goods) {
  let goodsArray = [];
  for (let prop in goods) {
    for (let bag in goods[prop]) {
      for (let product in goods[prop][bag].products) {
        goodsArray.push(goods[prop][bag].products[product]);
      }
    }
  }
  console.log(goodsArray);
  return goodsArray;
}

export default ParseStoreData;
