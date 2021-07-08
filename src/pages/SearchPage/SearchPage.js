import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { URL } from "../../parameters/url";
import axios from 'axios'
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Search from '../../components/Search/Search'
import Header from "../../components/Header/Header";

const SearchPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [data, setData] = useState([])
  const [busca, setBusca] = useState('')
    
    const buscaRestaurantes = () => {
        axios.get(`${URL}/restaurants`, {
            headers:{
              Auth: localStorage.getItem('user')
            }
          })
          .then((res) => {
            setData(res.data);
            
          })
          .catch((err) => {
            alert(err.response.data);
          })
      
        }
      useEffect(() => {
        buscaRestaurantes()
      }, []);
      

    const searchRestaurant = busca && data.restaurants && data.restaurants.filter((restaurant) => busca && restaurant.name.toLowerCase().includes(busca.toLowerCase())).map((restaurant) => {
      return<RestaurantCard restaurant={restaurant} />
    })
    
    return (
    <div>
     <Header name={"Busca"}/>
      <Search
        value={busca}
        onChange={(search) => setBusca(search)}
      />
     
      {busca && (searchRestaurant.length===0) && <p>Restaurante não encontrado!</p>}
      {searchRestaurant}
    </div>
  );
    }

export default SearchPage;
