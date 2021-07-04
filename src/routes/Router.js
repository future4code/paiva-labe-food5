import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddressPage from "../pages/AddressPage/AddressPage";
import Cart from "../pages/Cart/Cart";
import EditProfile from "../pages/EditProfile/EditProfile";
import EditAddress from "../pages/EditAddress/EditAddress";
import Home from "../pages/Home/Home";
import SearchPage from "../pages/Home/SearchPage"
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Restaurant from "../pages/Restaurant/Restaurant";
import Signup from "../pages/Signup/Signup";
import Welcome from "../pages/Welcome/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signup/address">
          <AddressPage />
        </Route>
        <Route exact path="/restaurant/:restaurantId">
          <Restaurant />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <EditProfile />
        </Route>
        <Route exact path="/profile/edit/address">
          <EditAddress />
        </Route>
        {/* <Route>
          <ErrorPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
