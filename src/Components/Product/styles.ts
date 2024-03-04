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
    height: 167px;
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
  height: 70px;
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
  background-color: ${colors.darkerPastel};
  color: ${colors.salmon};
  font-weight: 600;
  font-size: 14px;
  border: none;
  padding: 4px 12px;

  transition: 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.05);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  gap: 16px;
  align-items: flex-start;

  button {
    display: inline-block;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    padding: 32px;
    background-color: ${colors.salmon};

    > img {
      width: 280px;
      height: 280px;
    }

    ${CloseButton} {
      width: 16px;
      height: 16px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;
