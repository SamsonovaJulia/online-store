import React, { useEffect, useState } from "react";
import instance from "./axios-order";
import { AppStyle } from "./App.styled.js";
import Header from "./components/header/header.js";

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

  console.log("storeData", storeData);
  return (
    <AppStyle>
      <Header />
    </AppStyle>
  );
}

export default App;
