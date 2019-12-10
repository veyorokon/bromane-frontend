import React from "react";
import { Box } from "components/core";
import { Panel } from "components/composite";
import * as S from "./styled";

export default function Payment(props) {
  const handleChange = name => event => {
    props.stateChange(name, event.target.value);
  };
  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 5rem auto"
        textAlign="center"
      >
        Payment
      </S.CartSubTitle>
      <Box margin="0 auto" width={["100%", "80%", "80%", "80%", "100%"]}>
        <S.Form noValidate={false} autoComplete="off">
          <S.FullInput
            required
            id="number"
            label="Card Number"
            defaultValue=""
            margin="normal"
            onChange={handleChange("number")}
          />
          <S.Row>
            <S.ThirdInput
              required
              id="expMonth"
              label="Month"
              defaultValue=""
              margin="normal"
              onChange={handleChange("expMonth")}
            />

            <S.ThirdInput
              required
              id="expYear"
              label="Year"
              defaultValue=""
              margin="normal"
              onChange={handleChange("expYear")}
            />
            <S.ThirdInput
              required
              id="cvc"
              label="CVC"
              defaultValue=""
              margin="normal"
              onChange={handleChange("cvc")}
            />
          </S.Row>
        </S.Form>
      </Box>
      <S.CartSubTitle
        margin="3rem auto 0 auto"
        fontSize="0.8em"
        textAlign="center"
      >
        <S.DisclaimerBox maxWidth={["36rem"]}>
          <S.DisclaimerText>
            We use{" "}
            <S.StripeLink target="_blank" href="https://stripe.com/">
              Stripe
            </S.StripeLink>{" "}
            to keep your personal payment information secure. Click{" "}
            <b>Continue</b> to confirm and place your order on the next page.
          </S.DisclaimerText>
        </S.DisclaimerBox>
      </S.CartSubTitle>
    </Panel>
  );
}
