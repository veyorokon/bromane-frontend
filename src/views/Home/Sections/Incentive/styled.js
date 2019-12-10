import { lineHeight, textAlign, padding } from "styled-system";
import { Box, FlexColumn } from "components/core";
import styled from "styled-components";

const TitleWrapper = styled(FlexColumn)`
  font-weight: bold;
  letter-spacing: 0.4px;
  ${padding}
  ${textAlign}
  ${lineHeight}
`;
const ImageWrapper = styled(Box)`
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;

export { TitleWrapper, ImageWrapper, Image };
