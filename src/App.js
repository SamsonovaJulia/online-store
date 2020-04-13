import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main, ProductsStyle, FilterStyled } from "./App.styled.js";
import Header from "./components/header/header.js";
import Products from "./components/product/products.js";
import ProductPage from "./components/product-page/product-page";
import CategoryFilter from "./components/filter/category-filter/category-filter";
import Basket from "./components/basket/basket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BasketContext = React.createContext([{}]);

const App = () => {
  const [storeData, setStoreData] = useState();
  const [product, onChoose] = useState();
  const [basket, updateBasket] = useState([]);
  const [category, getCategory] = useState("category1+category2");

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

  // console.log("category", category);
  return (
    <Router>
      <AppStyle>
        <Header />
        <Main>
          <Switch>
            <FilterStyled>
              {/* <Route path="/product/:category"> */}
                <CategoryFilter getCategory={getCategory} />
              {/* </Route> */}
            </FilterStyled>
            <ProductsStyle>
              <Route path="/product/:id">
                <ProductPage product={product} addToBasket={addToBasket} />
              </Route>
              <Route path="/">
                <Products
                  goods={storeData}
                  onChoose={onChoose}
                  category={category}
                />
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
