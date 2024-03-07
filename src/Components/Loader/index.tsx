import { PropagateLoader } from "react-spinners";
import { colors } from "../../colors";
import { Container } from "./styles";

export const Loader = () => (
  <Container>
    <PropagateLoader color={colors.darkerPastel} />
  </Container>
);
