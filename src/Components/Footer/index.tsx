import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import { Container, SocialMediaContainer } from "./styles";

export const Footer = () => (
  <Container>
    <div>
      <img src={logo} alt="EFood Logo" />
      <SocialMediaContainer>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </SocialMediaContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{" "}
      </p>
    </div>
  </Container>
);
