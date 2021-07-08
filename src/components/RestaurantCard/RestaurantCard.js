import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinator";
import { DivCard, CardImagem, TituloProduto, ContainerTimeFrete, ContainerDados } from './styled'

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
      <DivCard>
        <CardImagem style={{ backgroundImage: 'url(' + logoUrl + ')' }} />
        <ContainerDados>
          <TituloProduto>{name}</TituloProduto>
          <ContainerTimeFrete>
            <p>{`${deliveryTime} min`}</p>
            <p>{`Frete R$ ${shipping}`}</p>
          </ContainerTimeFrete>
        </ContainerDados>
      </DivCard>
    </article>
  );
}
