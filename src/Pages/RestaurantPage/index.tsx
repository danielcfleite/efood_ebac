import { useParams } from "react-router-dom";
import { RestaurantBanner } from "../../Components/RestaurantBanner";
import { Header } from "../../Components/Header";
import { Products } from "../../Components/Products";
import { useEffect, useState } from "react";
import { Restaurante } from "../../types/restaurante";

export const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurants, setRestaurants] = useState<Restaurante[]>([]);
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);
  if (!id) {
    return <h3>Oops...404</h3>;
  }
  const restaurante = restaurants.find((r) => r.id === parseInt(id));
  return (
    <>
      <Header size="small" />
      {restaurante ? (
        <>
          <RestaurantBanner
            image={restaurante.capa}
            name={restaurante.titulo}
            cousine={restaurante.tipo}
          />
          <div className="container">
            {restaurante.cardapio ? (
              <Products products={restaurante.cardapio} />
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>OOPS! 404</>
      )}
    </>
  );
};
