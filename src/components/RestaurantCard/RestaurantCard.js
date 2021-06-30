import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinator";

export default function RestaurantCard(props) {
  const {
    logoUrl,
    name,
    shipping,
    deliveryTime,
    id
  } = props.restaurant;
  const history = useHistory();

  return (
    <article onClick={() => goToRestaurant(history, id)}>
      <img src={logoUrl} alt={name}/>
      <h3>{name}</h3>
      <div>
        <p>{`${deliveryTime} min`}</p>
        <p>{`Frete R$ ${shipping}`}</p>
      </div>
    </article>
  );
}
