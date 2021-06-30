import React from "react";

export default function RestaurantCard(props) {
  const {
    logoUrl,
    name,
    shipping,
    deliveryTime
  } = props.restaurant;

  return (
    <article>
      <img src={logoUrl} alt={name}/>
      <h3>{name}</h3>
      <div>
        <p>{`${deliveryTime} min`}</p>
        <p>{`Frete R$ ${shipping}`}</p>
      </div>
    </article>
  );
}
