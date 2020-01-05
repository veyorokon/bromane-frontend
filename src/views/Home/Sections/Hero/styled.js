/*
==============================================
                    IMPORTS
*/
import {Box, Flex, AnimatedText, Button} from "components";
import styled from "styled-components";

import {
  textAlign,
  letterSpacing,
  lineHeight,
  margin,
  justifyContent,
  fontSize,
  color,
  fontFamily,
  space,
  display,
  style
} from "styled-system";
/*
==============================================
              Styled Components
*/
const HomeWrapper = styled(Box)`
  min-height: 60rem;
`;

const HeroContentWrapper = styled(Flex)`
  flex-wrap: wrap;
  height: 100%;
  ${margin}
`;
const backgroundImage = style({
  prop: "backgroundImage"
});
const HeroImageBox = styled(Flex)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  transition: all 0.4s ease-in-out;
  ${backgroundImage};
  ${margin}
`;

const SignupButton = styled(AnimatedText, Button)`
  border-radius: 3px;
  border: 0;
  line-height: 4rem;
  min-width: 12rem;
  font-size: 1.5rem;
  padding: 0 2rem;
  transition: all 0.2s;
  text-transform: uppercase;
  animation-delay: 0.6s;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #f2b290;
  }
  &:active {
    background: #f29422;
  }
  ${display}
`;

const HeroText = styled.h1`
  font-weight: bold;
  letter-spacing: -0.75px;
  animation-delay: 0.2s;
  ${textAlign}
  ${fontSize}
  ${space}
  ${color}
  ${lineHeight}
  ${fontFamily}
`;

const HeroSubtitle = styled(AnimatedText)`
  animation-delay: 0.4s;
  line-height: 2;
  ${textAlign}
  ${letterSpacing}
`;

const HeroTextBoxWrapper = styled(Flex)`
  width: fit-content;
  flex-direction: column;
  height: 100%;
  ${justifyContent};
  ${margin};
`;

const HeroTextBox = styled(Box)``;

const ButtonWrapper = styled(Flex)`
  justify-content: ${justifyContent};
`;

export {
  HeroImageBox,
  HeroContentWrapper,
  HomeWrapper,
  SignupButton,
  HeroText,
  HeroSubtitle,
  HeroTextBoxWrapper,
  HeroTextBox,
  ButtonWrapper
};
