import { useGetRestaurantsQuery } from "../../services/api";
import { RestaurantCard } from "../RestaurantCard";
import { Container } from "./styles";

export const Restaurants = () => {
  const { data: restaurants } = useGetRestaurantsQuery();
  if (!restaurants) {
    return <h3>Carregando</h3>;
  }
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
