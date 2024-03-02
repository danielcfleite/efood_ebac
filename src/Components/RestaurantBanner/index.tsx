import { Banner } from "./styles";

type Props = {
  image: string;
  name: string;
  cousine: string;
};

export const RestaurantBanner = ({ image, name, cousine }: Props) => (
  <>
    <Banner style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay" />
      <div className="container">
        <p>{cousine}</p>
        <h2>{name}</h2>
      </div>
    </Banner>
  </>
);
