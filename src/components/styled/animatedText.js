import styled from "styled-components";
import { appear, Text } from "components/core";

const AnimatedText = styled(Text)`
  animation-name: ${appear};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export default AnimatedText;
