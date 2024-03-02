import styled from "styled-components";
import { colors } from "../../colors";

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
`;

export const ProductPhoto = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.p`
  background-color: ${colors.salmon};
  color: ${colors.background};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const ContentContainer = styled.div`
  padding: 8px;
`;

export const TitleAndRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
  line-height: 22px;
`;
