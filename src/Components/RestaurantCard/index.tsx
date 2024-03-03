import star from "../../assets/star.svg";
import { Restaurante } from "../../types/restaurante";
import { Button } from "../Button";
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
  avaliacao,
  capa,
  descricao,
  destacado,
  tipo,
  titulo,
}: Restaurante) => {
  const navigate = useNavigate();
  return (
    <Card>
      <ProductPhoto src={capa} alt={titulo} />
      <TagsContainer>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </TagsContainer>
      <ContentContainer>
        <TitleAndRatingContainer>
          <h3>{titulo}</h3>
          <div>
            <span>{avaliacao}</span>
            <img src={star} alt="nota" />
          </div>
        </TitleAndRatingContainer>
        <Description>{descricao}</Description>
        <Button onClick={() => navigate(`/restaurante/${id}`)}>
          Saiba mais
        </Button>
      </ContentContainer>
    </Card>
  );
};
