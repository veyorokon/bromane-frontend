import { lineHeight, textAlign, padding } from "styled-system";
import { Box, FlexColumn } from "components";
import styled, { keyframes } from "styled-components";

/*
==============================================
                 Animations
*/
const moveX = keyframes`
from{background-position-x:0px;}
to{background-position-x:-33px;}
`;

const TitleWrapper = styled(FlexColumn)`
  font-weight: bold;
  letter-spacing: 0.4px;
  ${padding}
  ${textAlign}
  ${lineHeight}
`;
const ImageWrapper = styled(Box)`
  margin: 0 auto;
  animation-name: ${moveX};
`;

const Image = styled.img`
  display: flex;
  align-self: flex-end;
  width: 100%;
`;

export { TitleWrapper, ImageWrapper, Image };
