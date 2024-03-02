import {
  AddToCartButton,
  Card,
  ContentContainer,
  Description,
  Title,
} from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const ProductCard = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <ContentContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
    </ContentContainer>
  </Card>
);
