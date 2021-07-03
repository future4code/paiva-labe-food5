import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData';
import { URL } from '../../parameters/url';
import { ContainerRestaurant, CardImagem, TituloProduto, DescricaoProduto, ContainerTimeFrete, ContainerDados } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext';


const Restaurant = () => {
  const { restaurantId } = useParams();
  const {cart, setCart} = useContext(GlobalStateContext);

  useProtectedPage()

  const detailRestaurant = useRequestData({}, `${URL}/restaurants/${restaurantId}`)

  const addCart = (addToProduct) => {
    const index = cart.findIndex((productInCart) => {
      if(productInCart.id === addToProduct.id){
        return true
      } else {
        return false
      }
    })

    if(index === -1){
      const quantity = {
        ...addToProduct,
        quantity: 1
      }
      const cartCopy = [...cart, quantity];
      setCart(cartCopy);
    } else{
      const cartCopy = cart.map((productInCart) => {
        if(productInCart.id === addToProduct.id){
          return{
            ...productInCart,
            quantity: productInCart.quantity + 1
          } 

        } else {
            return productInCart
          }
      })

      setCart(cartCopy)
    }
    
  }
  
  const listaDetalhe = detailRestaurant.restaurant && detailRestaurant.restaurant.products.map((opcoes) => {
    return (
      <ProductCard opcoes={opcoes} 
      addCart={addCart}
      />
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

    </div>
  )
}

export default Restaurant
