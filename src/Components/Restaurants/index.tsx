import { RestaurantCard } from "../RestaurantCard";
import { Container } from "./styles";
import { RestaurantsDB } from "../../MockDB/restaurants";

const restaurants = RestaurantsDB;

export const Restaurants = () => (
  <Container>
    {restaurants.map((restaurant) => (
      <RestaurantCard
        cousine={restaurant.cousine}
        description={restaurant.description}
        id={restaurant.id}
        image={restaurant.image}
        isHighlight={restaurant.isHighlight}
        name={restaurant.name}
        rating={restaurant.rating}
        key={restaurant.id}
      />
    ))}
  </Container>
);
