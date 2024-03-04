import { ProductCard } from "../Product";
import { Container } from "./styles";
import { Prato } from "../../types/cardapio";

type Props = {
  products: Prato[];
};

export const Products = ({ products }: Props) => (
  <Container>
    {products.map((p) => (
      <ProductCard key={p.id} produto={p} />
    ))}
  </Container>
);
