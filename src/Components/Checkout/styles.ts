import styled from "styled-components";
import { colors } from "../../colors";
import { GoToCheckoutButton } from "../Cart/styles";

type InputContainerProps = {
  variant?: "double";
};

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  h3 {
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
    color: ${colors.darkerPastel};
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.variant === "double" ? "row" : "column")};
  gap: 16px;
  line-height: 16.41px;

  * {
    color: ${colors.darkerPastel};
  }

  label {
    font-size: 14px;
  }

  input {
    margin-bottom: 8px;
    background-color: ${colors.darkerPastel};
    border: none;
    padding: 8px;
    color: #4b4b4b;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  #number {
    width: 70px;
  }

  #expiresYear {
    width: 130px;
  }
`;

export const CheckoutButton = styled(GoToCheckoutButton)`
  color: ${colors.salmon};
  margin-bottom: 8px;
`;

export const SucessMessage = styled.div`
  * {
    color: ${colors.darkerPastel};
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  button {
    color: ${colors.salmon};
  }
`;
