import React from "react";
import Router from './routes/Router';
import { GlobalState } from './global/GlobalState';
import ProductCard from "./components/ProductCard/ProductCard";

const App = () => {
  return(
  <GlobalState>
    <Router/>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </GlobalState>)
}

export default App;
