import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle, Main } from "./App.styled.js";
import Header from "./components/header/header.js";
import Products from "./components/product/products.js";
import Filter from "./components/filter/filter";

function App() {
  const [storeData, setStoreData] = useState();
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
        <Products goods={storeData} />
      </Main>
    </AppStyle>
  );
}

export default App;
