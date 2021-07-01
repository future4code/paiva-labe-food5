import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { URL } from '../parameters/url';
import useRequestData from '../hooks/useRequestData';




export const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const [restaurantId, setRestaurantId] = useState('');

  const detail = useRequestData({}, `${URL}/restaurants/${restaurantId}`)
 
  const data = {
    detail,
    cart,
    setCart, 
    restaurantDetail, 
    setRestaurantDetail,
    setRestaurantId
    }


  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

