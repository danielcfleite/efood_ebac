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
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import { Prato } from "../../types/cardapio";
import { useState } from "react";

type Props = {
  produto: Prato;
};

export const ProductCard = ({ produto }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(produto));
    dispatch(open());
  };
  return (
    <Card>
      <img src={produto.foto} alt={produto.nome} />
      <ContentContainer>
        <Title>{produto.nome}</Title>
        <Description> {getDescricao(`${produto.descricao}`)}</Description>
        <AddToCartButton onClick={() => setIsOpen(true)}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </ContentContainer>
      <Modal className={isOpen ? "visible" : ""}>
        <div className="container">
          <CloseButton src={closeButton} onClick={() => setIsOpen(false)} />
          <img src={produto.foto} alt={produto.nome} />
          <ProductInfo>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>Serve: de {produto.porcao}</p>
            <AddToCartButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(produto.preco)}
            </AddToCartButton>
          </ProductInfo>
        </div>
        <div className="overlay" onClick={() => setIsOpen(false)} />
      </Modal>
    </Card>
  );
};
