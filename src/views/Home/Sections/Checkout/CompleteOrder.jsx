import React from "react";
import { Panel } from "components";
import * as S from "./styled";

const SuccessIndicator = require("react-success-indicator");

export default function CompleteOrder(props) {
  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="3.2em"
        margin="1rem auto 1rem auto"
        textAlign="center"
      >
        Success!
      </S.CartSubTitle>
      <S.CartSubTitle
        margin="0 auto 3rem auto"
        fontSize="0.8em"
        textAlign="center"
      >
        Your order has been placed
      </S.CartSubTitle>
      <S.Row>
        <SuccessIndicator size="9.6rem" color="green" />
      </S.Row>
      <S.CartSubTitle
        margin="8rem auto 3rem auto"
        fontSize="1.2em"
        textAlign="center"
      >
        We{"'"}ll send you an email once it has shipped.
      </S.CartSubTitle>
    </Panel>
  );
}
