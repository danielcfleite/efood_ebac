import { ProductCard } from "../Product";
import { Container } from "./styles";
import { Prato } from "../../types/cardapio";

type Props = {
  products: Prato[];
};

export const Products = ({ products }: Props) => (
  <Container>
    {products.map((p) => (
      <ProductCard
        title={p.nome}
        image={p.foto}
        description={p.descricao}
        price={p.preco}
        serving={p.porcao}
      />
    ))}
  </Container>
);
