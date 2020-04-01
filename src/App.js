import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main, ProductsStyle } from "./App.styled.js";
import Header from "./components/header/header.js";
import Products from "./components/product/products.js";
import ProductPage from "./components/product/product-page/product-page";
import Filter from "./components/filter/filter";
import Basket from "./components/basket/basket";

const BasketContext = React.createContext([{}]);

const App = () => {
  const [storeData, setStoreData] = useState();
  const [product, onChoose] = useState();
  const [basket, updateBasket] = useState([]);

  const addToBasket = product => {
    updateBasket([...basket, product]);
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
