import styled from "styled-components";
import { colors } from "../../colors";

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.salmon};

  * {
    color: ${colors.darkerPastel};
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 8px;
  color: ${colors.darkerPastel};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 800;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
  background-color: ${colors.darkerPastel};
  color: ${colors.salmon};
  font-weight: 600;
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  padding: 4px 0;

  transition: 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.05);
  }
`;
