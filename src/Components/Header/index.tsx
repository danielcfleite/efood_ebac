import logo from "../../assets/logo.svg";
import { HeaderContainer, Logo } from "./styles";
import texture from "../../assets/texture.svg";

export type Props = {
  size: "small" | "big";
};

export const Header = ({ size }: Props) =>
  size === "big" ? (
    <HeaderContainer size={size} style={{ backgroundImage: `url(${texture})` }}>
      <div className="container">
        <Logo src={logo} alt="EFood Logo" />
        <h3>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </h3>
      </div>
    </HeaderContainer>
  ) : (
    <>
      <HeaderContainer
        size={size}
        style={{ backgroundImage: `url(${texture})` }}
      >
        <div className="container">
          <span>Restaurantes</span>
          <Logo src={logo} alt="EFood Logo" />
          <span>0 produto(s) no carrinho</span>
        </div>
      </HeaderContainer>
    </>
  );
