import React from "react";
import {Panel, ProductBox, ItemizedLine} from "components";
import productImg from "assets/img/products-thumbnail-compressed.jpeg";
import productImg2 from "assets/img/products-fiber-thumbnail-compressed.jpeg";

export default class Overview extends React.Component {
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
    const price = getOrderTotal().toFixed(2);
    return (
      <Panel {...props}>
        {plans.map(function(plan, index) {
          return (
            <ProductBox
              {...props}
              plan={plan}
              key={index}
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

        <ItemizedLine color="black.0" label="Total">
          ${price}
        </ItemizedLine>
      </Panel>
    );
  }
}
