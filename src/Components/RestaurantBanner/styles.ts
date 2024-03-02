import styled from "styled-components";
import { colors } from "../../colors";

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2;
    position: absolute;
    opacity: 0.5;
    top: 0;
  }

  .container {
    z-index: 10;
    position: relative;
    height: 100%;

    h2 {
      z-index: 3;

      position: absolute;
      bottom: 32px;
      color: ${colors.white};
    }
    p {
      z-index: 3;

      position: absolute;
      top: 25px;
      color: ${colors.white};
    }
  }
`;
