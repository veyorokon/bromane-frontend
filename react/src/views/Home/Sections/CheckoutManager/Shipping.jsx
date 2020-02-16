import React from "react";
import {Panel} from "components";
import MenuItem from "@material-ui/core/MenuItem";
import * as S from "./styled";
import {states} from "./constants";

export default function Shipping(props) {
  const handleChange = name => event => {
    props.stateChange(name, event.target.value);
  };
  const {shipping} = props;
  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 1.5rem auto"
        textAlign="center"
      >
        Shipping Address
      </S.CartSubTitle>
      <S.Form noValidate={false} autoComplete="off">
        <S.FullInput
          required
          id="addressName"
          type="address"
          label="Name"
          defaultValue={shipping.addressName}
          margin="normal"
          onChange={handleChange("addressName")}
        />
        <S.FullInput
          required
          id="addressLine1"
          type="address"
          label="Address Line 1"
          defaultValue={shipping.addressLine1}
          margin="normal"
          onChange={handleChange("addressLine1")}
        />
        <S.FullInput
          required
          id="addressLine2"
          type="address"
          label="Address Line 2"
          defaultValue={shipping.addressLine2}
          margin="normal"
          onChange={handleChange("addressLine2")}
        />
        <S.FullInput
          required
          id="addressCity"
          label="City"
          defaultValue={shipping.addressCity}
          margin="normal"
          onChange={handleChange("addressCity")}
        />
        <S.Row>
          <S.HalfInput
            required
            id="addressState"
            label="State"
            defaultValue={shipping.addressState}
            margin="normal"
            value={states.abbreviation}
            onChange={handleChange("addressState")}
          >
            {states.map(state => (
              <MenuItem key={state.name} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </S.HalfInput>

          <S.HalfInput
            required
            id="addressZip"
            label="Zip"
            defaultValue={shipping.addressZip}
            margin="normal"
            onChange={handleChange("addressZip")}
          />
        </S.Row>
      </S.Form>
    </Panel>
  );
}
