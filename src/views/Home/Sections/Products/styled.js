import styled from "styled-components";
import { Box, FlexColumn } from "components/core";
import {
  padding,
  background,
  justifySelf,
  alignItems,
  width,
  maxWidth,
  textAlign,
  lineHeight
} from "styled-system";
import { system } from "styled-system";

const TitleWrapper = styled(FlexColumn)`
  font-weight: bold;
  letter-spacing: 0.4px;
  ${padding}
  ${textAlign}
  ${lineHeight}
`;

const ProductsContainer = styled(Box)`
  position: relative;
  display: grid;
  ${system({
    gridTemplateColumns: {
      property: "gridTemplateColumns"
    }
  })}
  grid-column-gap: calc(1rem + ((64 * (100vw - 768px)) / 671));
  grid-row-gap: calc(1rem + ((64 * (100vw - 768px)) / 671));
  justify-items: center;
  grid-row-gap: 9.5rem;
  ${padding} ${background};
`;

const Card = styled(Box)`
  display: grid;
  ${maxWidth}
  ${width}
  ${justifySelf}
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled(Box)`
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  ${alignItems}
`;

export { TitleWrapper, ProductsContainer, Card, CardImage, CardBody };
