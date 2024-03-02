import { ProductCard } from "../Product";
import { Container } from "./styles";
import { Product } from "../../Models/products";

type Props = {
  products: Product[];
};

export const Products = ({ products }: Props) => (
  <Container>
    {products.map((p) => (
      <ProductCard
        title={p.title}
        image={p.image}
        description={p.description}
      />
    ))}
  </Container>
);
