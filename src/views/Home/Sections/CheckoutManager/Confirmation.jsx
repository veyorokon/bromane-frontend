import React from "react";
import { Panel, Tabs, ProductBox, ItemizedLine, Flex } from "components";
import productImg from "assets/img/products-thumbnail-compressed.jpeg";
import * as S from "./styled";

export default function Confirmation(props) {
  const { product } = props;
  const title = "Bromane Starter Kit - " + product.color;
  const price = product.price.toFixed(2);
  const shipping = props.shipping;
  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 5rem auto"
        textAlign="center"
      >
        Confirmation
      </S.CartSubTitle>
      <ProductBox
        title={title}
        subtitle={"Monthly subscription."}
        price={"$" + price}
        description={"Starter kit for Bromane."}
        img={productImg}
      />
      <ItemizedLine label="Applicator">
        <strike style={{ marginRight: "55%" }}> $5.00 </strike>
        Free
      </ItemizedLine>
      <ItemizedLine label="Touch-up Cloth">
        <strike style={{ marginRight: "55%" }}> $5.00 </strike>
        {"   "}Free
      </ItemizedLine>
      <ItemizedLine label="Bromane Fibers">${price}</ItemizedLine>
      <ItemizedLine color="black.0" label="Total">
        ${price}
      </ItemizedLine>

      <S.CartSubTitle
        margin="4rem auto 4rem auto"
        fontSize="0.8em"
        textAlign="center"
      >
        <S.DisclaimerBox
          margin="0 auto"
          maxWidth={["100%", "80%", "80%", "80%", "100%", "90%", "80%"]}
        >
          <Flex>
            <S.HalfBox>
              <b>Shipping Address</b>
            </S.HalfBox>
            <S.HalfBox alignSelf="flex-end">
              {shipping.addressLine1}
              <br /> {shipping.addressLine2}
              <br />
              {shipping.addressCity}, {shipping.addressState}{" "}
              {shipping.addressZip}
            </S.HalfBox>
          </Flex>
        </S.DisclaimerBox>
      </S.CartSubTitle>
    </Panel>
  );
}
