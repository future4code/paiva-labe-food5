import React from 'react'
import { URL } from '../../parameters/url'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtectedPage'


const Home = () => {
    const restaurant = useRequestData([], `${URL}/restaurants`)
    useProtectedPage()

    return(
        <div>
            <h1> pagina inicial / feed de restaurantes</h1>

        </div>
    )
}

export default Home