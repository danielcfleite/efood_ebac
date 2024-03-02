import { useParams } from "react-router-dom";
import { RestaurantsDB } from "../../MockDB/restaurants";
import { RestaurantBanner } from "../../Components/RestaurantBanner";
import { Header } from "../../Components/Header";
import { Products } from "../../Components/Products";

export const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = id ? parseInt(id) : undefined;
  const restaurant = parsedId
    ? RestaurantsDB.find((i) => i.id === parsedId)
    : undefined;
  const products = restaurant ? restaurant.products : undefined;
  return (
    <>
      <Header size="small" />
      {restaurant ? (
        <>
          <RestaurantBanner
            image={restaurant.image}
            name={restaurant.name}
            cousine={restaurant.cousine}
          />
          <div className="container">
            {products ? <Products products={products} /> : <></>}
          </div>
        </>
      ) : (
        <>ERRO!</>
      )}
    </>
  );
};
