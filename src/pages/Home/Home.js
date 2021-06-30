import React from "react";
import { URL } from "../../parameters/url";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useHistory } from "react-router-dom";
import { goToSearch } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  useProtectedPage();
  const history = useHistory();
  const { restaurants } = useRequestData({}, `${URL}/restaurants`);

  return (
    <main>
      <Header name="FutureEats"/>
      <section>
        <input
          placeholder="Restaurante"
          onClick={() => goToSearch(history)}
          readOnly
        />
      </section>
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
