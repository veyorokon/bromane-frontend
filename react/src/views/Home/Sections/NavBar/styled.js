/*
==============================================
                    IMPORTS
*/
import { Box, Text, Flex } from "components";
import styled from "styled-components";
import {
  letterSpacing,
  system,
  color,
  left,
  width,
  height,
  top
} from "styled-system";
import { ShoppingCart } from "styled-icons/material/ShoppingCart";

/*
==============================================
                  COMPONENTS
*/
const NavContainer = styled(Box)`
  position: fixed;
  z-index: 40;
  transition: none;
`;

const LogoText = styled(Text)`
  ${letterSpacing}
  ${left}
  transform: translateX(-50%);
  transition: left 0.2s cubic-bezier(0.2, 0, 0, 1), color 0s;
  position: absolute;
`;

const SVGWrapper = styled(Flex)`
  margin: 0 2rem;
  height: 100%;
  fill: currentColor;
  transition: unset;
  position: relative;
  ${system({
    fill: {
      property: "fill",
      scale: "colors"
    }
  })};
`;

const NavItemsContainer = styled(Flex)`
  align-items: center;
  height: 100%;
`;

const ShoppingCartIcon = styled(ShoppingCart)`
  height: 100%;
  width: auto;
  cursor: pointer;

  &:hover {
    color: #f2b290;
  }
  &:active {
    color: #f29422;
  }
  ${color}
`;

const LogoWrapper = styled(Flex)`
  transition: unset;
  position: relative;
`;

const NavFlex = styled(Flex)`
  transition: none;
`;

const Badge = styled.div`
  position: absolute;
  border-radius: 50%;
  ${system({
    background: {
      property: "background",
      scale: "colors"
    }
  })};
  ${width}
  ${height}
  ${top}
  display: flex;
  justify-content: center;
  align-items: center;
  right: -10%;

  font-size: 1rem;
  color: currentColor;
`;

export {
  NavContainer,
  LogoText,
  SVGWrapper,
  NavItemsContainer,
  ShoppingCartIcon,
  LogoWrapper,
  NavFlex,
  Badge
};
