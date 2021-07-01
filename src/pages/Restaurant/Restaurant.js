import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData';
import { URL } from '../../parameters/url';



const Restaurant = () => {
    const {restaurantId} = useParams()
  
    const detailRestaurant = useRequestData({}, `${URL}/restaurants/${restaurantId}`)


    const listaDetalhe= detailRestaurant.restaurant && detailRestaurant.restaurant.products.map((opcoes) => {
        return(
            <ProductCard opcoes={opcoes}/>
        )
    })
    return(
        <div>
            <h1> Pagina do restaurante </h1>

            {listaDetalhe}
                
        </div>
    )
}

export default Restaurant
