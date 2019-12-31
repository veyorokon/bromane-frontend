import React from "react";
import {Panel, Tabs, ProductBox, ItemizedLine, Flex} from "components";
import productImg from "assets/img/products-thumbnail-compressed.jpeg";
import productImg2 from "assets/img/products-fiber-thumbnail-compressed.jpeg";
import * as S from "./styled";

export default class Confirmation extends React.Component {
  planList = () => {
    const {cart} = this.props;
    let arr = [];
    for (var key in cart) {
      if (cart.hasOwnProperty(key)) {
        arr.push(cart[key]);
      }
    }
    return arr;
  };

  getOrderTotal = () => {
    const {cart} = this.props;
    let total = 0;
    for (var key in cart) {
      if (cart.hasOwnProperty(key)) {
        total += cart[key].quantity * cart[key].price;
      }
    }
    return total;
  };
  render() {
    const {props, getOrderTotal} = this;
    const plans = this.planList();
    const total = getOrderTotal().toFixed(2);
    const {shipping} = props;
    return (
      <Panel {...props}>
        <S.CartSubTitle
          fontSize="1.2em"
          margin="0 auto 5rem auto"
          textAlign="center"
        >
          Confirmation
        </S.CartSubTitle>
        {plans.map(function(plan) {
          return (
            <ProductBox
              {...props}
              key={plan.key}
              title={plan.product.name + " - " + plan.description}
              subtitle={plan.product.description}
              price={"$" + plan.price}
              description={
                plan.descriptionType +
                ": " +
                plan.description +
                " | quantity: " +
                plan.quantity
              }
              img={
                plan.product.name.toLowerCase().includes("starter")
                  ? productImg
                  : productImg2
              }
            />
          );
        })}
        {/*<ItemizedLine label="Applicator">
          <strike style={{marginRight: "55%"}}> $5.00 </strike>
          Free
        </ItemizedLine>
        <ItemizedLine label="Touch-up Cloth">
          <strike style={{marginRight: "55%"}}> $5.00 </strike>
          {"   "}Free
        </ItemizedLine>
        <ItemizedLine label="Bromane Fibers">${price}</ItemizedLine>*/}
        <ItemizedLine color="black.0" label="Total">
          ${total}
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
}
