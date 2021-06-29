import React from 'react'
import { URL } from '../../parameters/url'
import useRequestData from '../../hooks/useRequestData'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const restaurant = useRequestData([], `${URL}/restaurants`)
    
    console.log(restaurant.restaurants)

    return(
        <div>
            <h1> pagina inicial / feed de restaurantes</h1>

        </div>
    )
}

export default Home