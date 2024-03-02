import star from "../../assets/star.svg";
import { Button } from "../Button";
import { Restaurant } from "../../Models/restaurant";
import {
  Card,
  ContentContainer,
  ProductPhoto,
  Tag,
  TagsContainer,
  TitleAndRatingContainer,
  Description,
} from "./styles";
import { useNavigate } from "react-router-dom";
export const RestaurantCard = ({
  id,
  cousine,
  description,
  isHighlight,
  name,
  rating,
  image,
}: Restaurant) => {
  const navigate = useNavigate();
  return (
    <Card>
      <ProductPhoto src={image} alt={name} />
      <TagsContainer>
        {isHighlight && <Tag>Destaque da semana</Tag>}
        <Tag>{cousine}</Tag>
      </TagsContainer>
      <ContentContainer>
        <TitleAndRatingContainer>
          <h3>{name}</h3>
          <div>
            <span>{rating}</span>
            <img src={star} alt="nota" />
          </div>
        </TitleAndRatingContainer>
        <Description>{description}</Description>
        <Button onClick={() => navigate(`/restaurante/${id}`)}>
          Saiba mais
        </Button>
      </ContentContainer>
    </Card>
  );
};
