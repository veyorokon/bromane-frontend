import React from "react";
import { Panel, Tabs } from "components/composite";
import emptyCart from "assets/img/lookingup-cart-compressed.jpeg";

import * as S from "./styled";

const EmptyCart = () => {
  return (
    <Tabs overrideDefault selected={1}>
      <Panel></Panel>
      <Panel
        title={
          <S.CartSubTitle textAlign="center">
            Hm... looks pretty empty bro
          </S.CartSubTitle>
        }
      >
        <S.EmptyCartImageWrapper
          backgroundImage={`url(${emptyCart})`}
        ></S.EmptyCartImageWrapper>
      </Panel>
      <Panel></Panel>
    </Tabs>
  );
};

export default EmptyCart;
