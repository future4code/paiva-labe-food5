import React from "react";
import { URL } from "../../parameters/url";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useHistory } from "react-router-dom";
import { goToSearch } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Input, ContainerInput, SearchI } from './styled'



const Home = () => {
  useProtectedPage();
  const history = useHistory();
  const { restaurants } = useRequestData({}, `${URL}/restaurants`);
 
  return (
    <main>
      <Header name="FutureEats"/>
      <ContainerInput>
        <SearchI/><Input
          type="search"
          placeholder=''
          onClick={() => goToSearch(history)}
          readOnly
        />
      </ContainerInput>
      <section>
        {restaurants?.length && restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </section>
      <Footer/>
    </main>
  );
};

export default Home;
