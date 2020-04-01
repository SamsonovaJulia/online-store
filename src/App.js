import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main, ProductsStyle } from "./App.styled.js";
import Header from "./components/header/header.js";
import Products from "./components/product/products.js";
import ProductPage from "./components/product/product-page/product-page";
import Filter from "./components/filter/filter";

function App() {
  const [storeData, setStoreData] = useState();
  const [product, onChoose] = useState();
  useEffect(() => {
    const getStoreData = async () => {
      const response = await instance.get("categories.json");
      console.log("response.data", response.data);
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
          <ProductPage product={product} />
        </ProductsStyle>
      </Main>
    </AppStyle>
  );
}

export default App;
