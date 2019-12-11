import styled from "styled-components";
import { borderColor } from "theme/fields";
import { Box } from "components/core";

const ItemizedLineContainer = styled(Box)`
  margin: 2% auto 0 auto;
  line-height: 3;
  border-top: 1px solid;
  display: flex;
  justify-content: space-between;
  ${borderColor}
`;

export default { ItemizedLineContainer };
