import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main, ProductsStyle } from "./App.styled.js";
import Header from "./components/header/header.js";
import ProductPage from "./components/product-page/product-page";
import Basket from "./components/basket/basket";
import MainPage from "./components/main-page/main-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  console.log("storeData", storeData);
  return (
    <Router>
      <AppStyle>
        <Header />
        <Main>
          <Switch>
            <ProductsStyle>
              <Route path="/product/:id">
                <ProductPage product={product} addToBasket={addToBasket} />
              </Route>
              <Route path="/" exact>
                <MainPage goods={storeData} onChoose={onChoose} />
              </Route>
            </ProductsStyle>
            <BasketContext.Provider value={basket}>
              <Basket />
            </BasketContext.Provider>
          </Switch>
        </Main>
      </AppStyle>
    </Router>
  );
};

export { App, BasketContext };
