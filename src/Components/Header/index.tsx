import logo from "../../assets/logo.svg";
import { HeaderContainer, Logo } from "./styles";
import texture from "../../assets/texture.svg";
import { Link } from "react-router-dom";

export type Props = {
  size: "small" | "big";
};

export const Header = ({ size }: Props) =>
  size === "big" ? (
    <HeaderContainer size={size} style={{ backgroundImage: `url(${texture})` }}>
      <div className="container">
        <Link to="/">
          <Logo src={logo} alt="EFood Logo" />
        </Link>
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
          <Link to="/">
            <Logo src={logo} alt="EFood Logo" />
          </Link>
          <span>0 produto(s) no carrinho</span>
        </div>
      </HeaderContainer>
    </>
  );
