/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import { compose } from "styled-system";
import configure from "theme/config";
import { keyframes } from "styled-components";

/*
    Globals & Constants
*/
const animationDuration = configure("animationDuration", "duration");
const animationTimingFunction = configure("animationTimingFunction", "timing");
const animationDelay = configure("animationDelay", "delay");
const animationFillMode = configure("animationFillMode", "fillMode");

const animationFields = compose(
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode
);

/*
    Keyframes
*/
const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const Animate = styled.span`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

Animate.defaultProps = {
  fillMode: "both"
};

export default Animate;
export { appear };
