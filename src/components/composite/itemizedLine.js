import React from "react";
import { ItemizedLineContainer, LineLabel } from "components/styled";

const ItemizedLine = ({ label, children, color }) => {
  return (
    <ItemizedLineContainer
      width={["100%", "80%", "80%", "80%", "100%", "90%", "80%"]}
      borderColor={color || "green.1"}
      color={color || "grey.1"}
    >
      <LineLabel>{label}</LineLabel>
      <LineLabel>{children}</LineLabel>
    </ItemizedLineContainer>
  );
};

export default ItemizedLine;
