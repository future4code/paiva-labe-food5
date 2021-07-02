import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const [profileAddress, setProfileAddress] = useState([]);
  
  const data = {
    cart,
    setCart, 
    restaurantDetail, 
    setRestaurantDetail,
    profileAddress,
    setProfileAddress
    }


  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

