import styled from "styled-components";
import { padding, textAlign, lineHeight } from "styled-system";
import { Flex, FlexColumn, Box } from "components";

const SolutionWrapper = styled(Flex)`
  flex-direction: column;
  ${padding}
`;

const TitleWrapper = styled(FlexColumn)`
  font-weight: bold;
  letter-spacing: 0.4px;
  ${padding}
  ${textAlign}
  ${lineHeight}
`;

const BeforeAfterWrapper = styled(Box)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome 6.0+, Safari 3.1+, Edge & Opera 15+ */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none;
`;

export { SolutionWrapper, TitleWrapper, BeforeAfterWrapper };
