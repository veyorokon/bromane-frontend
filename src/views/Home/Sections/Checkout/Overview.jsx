import React from "react";
import { Panel, ProductBox, ItemizedLine } from "components";
import productImg from "assets/img/products-thumbnail-compressed.jpeg";

export default function Overview(props) {
  const title = "Bromane Starter Kit - " + props.product.color;
  const price = props.product.price.toFixed(2);
  return (
    <Panel {...props}>
      <ProductBox
        {...props}
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
    </Panel>
  );
}
