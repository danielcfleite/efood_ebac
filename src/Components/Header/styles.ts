import styled from "styled-components";
import { Props } from ".";

export const HeaderContainer = styled.header<Props>`
  padding-top: ${(props) => (props.size === "small" ? "64px" : "64px")};
  padding-bottom: ${(props) => (props.size === "small" ? "64px" : "40px")};
  div {
    display: flex;
    flex-direction: ${(props) => (props.size === "small" ? "row" : "column")};
    align-items: center;
    justify-content: space-between;
    height: ${(props) => (props.size === "small" ? "auto" : "384px")};

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }

  h3 {
    font-weight: 800;
    font-size: 36px;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: auto;
`;
