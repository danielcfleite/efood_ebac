import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${colors.salmon};


    .container {
        max-width: 1024px;
        margin: 0 auto;
        width: 100%;
    }
}

body{ 
    background-color: ${colors.background};
}
`;

export const MainContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
`;
