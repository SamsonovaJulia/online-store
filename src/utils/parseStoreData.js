function ParseStoreData(goods, category) {
  let goodsArray = [];
  if (category.category1 === true && category.category2 === true) {
    for (let bag in goods) {
      for (let product in goods[bag].products) {
        goodsArray.push(goods[bag].products[product]);
      }
    }
  } else if (category.category1 === true) {
    for (let product in goods.category01.products) {
      goodsArray.push(goods.category01.products[product]);
    }
  } else if (category.category2 === true) {
    for (let product in goods.category02.products) {
      goodsArray.push(goods.category02.products[product]);
    }
  }
  return goodsArray;
}

export default ParseStoreData;
