import deleteIcon from "../../assets/delete.svg";
import styled from "styled-components";
import { colors } from "../../colors";
import { AddToCartButton } from "../Product/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 999;

  &.is-open {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 999;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 16px;

    * {
      color: ${colors.background};
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 8px;
  background-color: ${colors.background};
  color: ${colors.salmon};
  margin-bottom: 16px;
  width: 344px;
  padding: 8px;
  position: relative;

  h3 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
  }
`;

export const DeleteButton = styled.button`
  background-image: url(${deleteIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const GoToCheckoutButton = styled(AddToCartButton)`
  width: 100%;
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 18px;
  border: none;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.3);
  }
`;
