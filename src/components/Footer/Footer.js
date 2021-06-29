import React from "react";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import { FooterContainer } from "../Footer/styled";
import { useHistory } from "react-router-dom";
import { goToCart, goToHome, goToProfile } from "./../../routes/coordinator";

const Footer = () => {
  const history = useHistory();

  return (
    <FooterContainer>
      <HomeIcon
        fontSize="27px"
        color="primaryColor"
        onClick={() => goToHome(history)}
      />
      <ShoppingCart
        fontSize="27px"
        color="primaryColor"
        onClick={() => goToCart(history)}
      />
      <PersonIcon
        fontSize="27px"
        color="primaryColor"
        onClick={() => goToProfile(history)}
      />
    </FooterContainer>
  );
};

export default Footer;
