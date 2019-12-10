import { Box, Flex } from "components/core";
import { appear } from "components/core";
import { AdaptiveText } from "components/styled";
import styled from "styled-components";
import { width, fontSize, maxHeight } from "styled-system";

const MissionWrapper = styled(Box)`
  height: -webkit-fill-available;
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 55rem;
  ${maxHeight}
`;

const Image = styled.img`
  ${width}
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease-in-out;
`;

const TextWrapper = styled(Flex)`
  flex-grow: 1;
  position: absolute;
  right: 0;
  z-index: 10;
  padding: 1.75em;
  ${width};
  ${fontSize}
`;
const Text = styled(AdaptiveText)`
  font-weight: 500;
  animation-name: ${appear};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
`;

export { MissionWrapper, Image, TextWrapper, Text };
