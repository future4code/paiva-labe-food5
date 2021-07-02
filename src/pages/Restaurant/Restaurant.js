import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData';
import { URL } from '../../parameters/url';
import { ContainerRestaurant, CardImagem, TituloProduto, DescricaoProduto, ContainerTimeFrete, ContainerDados } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from '../../components/Header/Header'


const Restaurant = () => {
  const { restaurantId } = useParams()
  useProtectedPage()

  const detailRestaurant = useRequestData({}, `${URL}/restaurants/${restaurantId}`)

  const listaDetalhe = detailRestaurant.restaurant && detailRestaurant.restaurant.products.map((opcoes) => {
    return (
      <ProductCard opcoes={opcoes} />
    )
  })
  return (
    <div>
      <Header name={"Restaurante"}/>
      {detailRestaurant.restaurant ?
        <ContainerRestaurant>
          <CardImagem style={{ backgroundImage: 'url(' + detailRestaurant.restaurant.logoUrl + ')' }} alt={detailRestaurant.restaurant.name} />
          <ContainerDados>
            <TituloProduto>{detailRestaurant.restaurant.name}</TituloProduto>
            <DescricaoProduto>{detailRestaurant.restaurant.category}</DescricaoProduto>
            <ContainerTimeFrete>
              <DescricaoProduto><AccessTimeIcon style={{ fontSize: 15 }} /> {detailRestaurant.restaurant.deliveryTime} min</DescricaoProduto>
              <DescricaoProduto>{`Frete R$ ${detailRestaurant.restaurant.shipping}`}</DescricaoProduto>
            </ContainerTimeFrete>

            <DescricaoProduto>{detailRestaurant.restaurant.address}</DescricaoProduto>
          </ContainerDados>
          <hr />
        </ContainerRestaurant>

        : <p>...carregando</p>}

      {listaDetalhe}
      {console.log('lista', detailRestaurant.restaurant)}

    </div>
  )
}

export default Restaurant
