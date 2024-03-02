import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.footer`
  width: 100%;
  background-color: ${colors.darkerPastel};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 0;

  p {
    width: 480px;
    margin: 0 auto;
    font-size: 12px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`;
