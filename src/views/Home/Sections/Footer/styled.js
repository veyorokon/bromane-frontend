import styled from "styled-components";
import { color, textAlign } from "styled-system";
import { Box, Flex, Text } from "components/core";

const FooterWrapper = styled(Box)`
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
`;

const FooterContainer = styled(Box)`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  width: 97%;
`;
const FooterRow = styled(Box)`
  &:before {
    display: table;
  }
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`;
const FooterCol = styled(Flex)`
  flex-direction: column;
  float: left;
  padding: 0 calc(3rem + (12 * (100vw - 48rem) / 672));
  min-width: fit-content;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const FooterHeader = styled.p`
  grid-column: 1;
  grid-row: 1;
  font-size: calc(1.8rem + (8 * (100vw - 48rem) / 672));
  line-height: calc(3.2rem + (8 * (100vw - 48rem) / 672));
  ${color}
  ${textAlign}
  &::selection {
    background-color: #b2abba;
    color: white;
  }
`;

const FooterText = styled(Text)`
  &::selection {
    background-color: #b2abba;
    color: white;
  }
`;

const HzLine = styled.hr`
  border: 1px solid #8c8b8a;
  margin: 2rem calc(3rem + (12 * (100vw - 48rem) / 672));
`;

export {
  FooterWrapper,
  FooterContainer,
  FooterRow,
  FooterCol,
  FooterText,
  FooterHeader,
  HzLine
};
