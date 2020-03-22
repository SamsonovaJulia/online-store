import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import instance from "./axios-order";
import { AppStyle } from "./App.styled.js";

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
    <createGlobalStyle>
      <AppStyle>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppStyle>
    </createGlobalStyle>
  );
}

export default App;
