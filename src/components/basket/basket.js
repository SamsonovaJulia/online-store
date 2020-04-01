import React, { useContext } from "react";
import { BasketContext } from "../../App";

function Basket() {
  const context = useContext(BasketContext);
  console.log("BasketContext", context);

  return <></>;
}

export default Basket;
