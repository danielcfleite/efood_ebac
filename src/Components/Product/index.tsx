import { useState } from "react";
import {
  AddToCartButton,
  Card,
  CloseButton,
  ContentContainer,
  Description,
  Modal,
  ProductInfo,
  Title,
} from "./styles";
import closeButton from "../../assets/close.png";
import { formataPreco } from "../../utils/formataPreco";
import { getDescricao } from "../../utils/getDescricao";

type Props = {
  image: string;
  title: string;
  description: string;
  serving: string;
  price: number;
};

export const ProductCard = ({
  image,
  title,
  description,
  price,
  serving,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Card>
      <img src={image} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Description> {getDescricao(`${description}`)}</Description>
        <AddToCartButton onClick={() => setIsModalVisible(true)}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </ContentContainer>
      <Modal className={isModalVisible ? "visible" : ""}>
        <div className="container">
          <CloseButton
            src={closeButton}
            onClick={() => setIsModalVisible(false)}
          />
          <img src={image} alt={title} />
          <ProductInfo>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Serve: de {serving}</p>
            <AddToCartButton>
              Adicionar ao carrinho - {formataPreco(price)}
            </AddToCartButton>
          </ProductInfo>
        </div>
        <div className="overlay" onClick={() => setIsModalVisible(false)} />
      </Modal>
    </Card>
  );
};
