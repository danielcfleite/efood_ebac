import { Container } from "./styles";

type Props = {
  children: string;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => (
  <Container onClick={onClick}>{children}</Container>
);
