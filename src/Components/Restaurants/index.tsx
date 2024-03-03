import { Restaurante } from "../../types/restaurante";
import { RestaurantCard } from "../RestaurantCard";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([]);
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          tipo={restaurant.tipo}
          descricao={restaurant.descricao}
          id={restaurant.id}
          capa={restaurant.capa}
          destacado={restaurant.destacado}
          titulo={restaurant.titulo}
          avaliacao={restaurant.avaliacao}
          key={restaurant.id}
          cardapio={restaurant.cardapio}
        />
      ))}
    </Container>
  );
};
