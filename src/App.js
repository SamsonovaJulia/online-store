import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main, ProductsStyle } from "./App.styled.js";
import Header from "./components/header/header.js";
import Products from "./components/product/products.js";
import ProductPage from "./components/product-page/product-page";
import Filter from "./components/filter/filter";
import Basket from "./components/basket/basket";

const BasketContext = React.createContext([{}]);

const App = () => {
  const [storeData, setStoreData] = useState();
  const [product, onChoose] = useState();
  const [basket, updateBasket] = useState([]);

  const addToBasket = (product) => {
    if (basket.length !== 0) {
      basket.map(function (bag, index) {
        if (bag.name === product.name) {
          const newQuantity = +product.quantity + bag.quantity;
          const updatedObj = { ...bag, quantity: newQuantity };
          return updateBasket([
            ...basket.slice(0, index),
            updatedObj,
            ...basket.slice(index + 1),
          ]);
        } else {
          return updateBasket([...basket, product]);
        }
      });
    } else {
      return updateBasket([...basket, product]);
    }
  };

  useEffect(() => {
    const getStoreData = async () => {
      const response = await instance.get("categories.json");
      setStoreData(response.data);
    };
    getStoreData();
  }, []);

  return (
    <AppStyle>
      <Header />
      <Main>
        <Filter />
        <ProductsStyle>
          <Products goods={storeData} onChoose={onChoose} />
          <ProductPage product={product} addToBasket={addToBasket} />
        </ProductsStyle>
        <BasketContext.Provider value={basket}>
          <Basket />
        </BasketContext.Provider>
      </Main>
    </AppStyle>
  );
};

export { App, BasketContext };
