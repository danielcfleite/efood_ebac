import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.darkerPastel};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.05);
  }
`;
