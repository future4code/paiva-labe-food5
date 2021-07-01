import React, { useContext, useLayoutEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import GlobalStateContext from "../../global/GlobalStateContext";
import { useParams } from "react-router-dom";



const Restaurant = () => {
    const {restaurantId} = useParams()
    const { detail, setRestaurantId } = useContext(GlobalStateContext);
    

    useLayoutEffect(() => {
      setRestaurantId(restaurantId)
    }, [])

    const listaDetalhe= detail.restaurant && detail.restaurant.products.map((opcoes) => {
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
