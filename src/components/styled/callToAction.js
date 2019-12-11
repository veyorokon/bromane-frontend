import styled from "styled-components";
import { Button } from "components/core";

const CallToAction = styled(Button)`
  display: flex;
  border-radius: 3px;
  border: 0;
  line-height: 4rem;
  font-size: 1.5rem;
  transition: all 0.2s;
  text-transform: uppercase;
  animation-delay: 0.6s;
  text-align: center;
  cursor: pointer;
  min-width: max-content;
  justify-content: center;
  &:hover {
    background: #f2b290;
  }
  &:active {
    background: #f29422;
  }
`;

export default CallToAction;
