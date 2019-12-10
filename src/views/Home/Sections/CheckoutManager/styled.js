import styled from "styled-components";
import React from "react";
import {
  system,
  color,
  width,
  margin,
  alignSelf,
  maxWidth
} from "styled-system";
import { Box, Flex } from "components/core";

import { AnimatedText, SubTitle } from "components/styled";

import { FormControl, TextField } from "@material-ui/core";

import { CartAlt as ShoppingCart } from "styled-icons/boxicons-solid/CartAlt";
import { LogInCircle } from "styled-icons/boxicons-regular/LogInCircle";
import { LocalShipping } from "styled-icons/material/LocalShipping";
import { CreditCard } from "styled-icons/icomoon/CreditCard";
import { Cred } from "styled-icons/crypto/Cred";

const ShoppingCartIcon = styled(ShoppingCart)``;
const LoginIcon = styled(LogInCircle)``;
const LocalShippingIcon = styled(LocalShipping)``;
const CreditCardIcon = styled(CreditCard)``;
const ConfirmIcon = styled(Cred)``;

const Icon = styled.span`
  height: inherit;
  cursor: pointer;
  ${color}
  ${width}
`;

const SVGWrapper = styled(Flex)`
  height: auto;
  width: 100%;
  fill: black;
  transition: unset;
`;

const DrawerButton = styled(AnimatedText)`
  ${width}
  height: 60px;
  cursor: pointer;
  ${system({
    background: {
      property: "backgroundColor",
      scale: "colors"
    }
  })}
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 1rem auto;
  transition: all 0.8s;
  outline: none;
  ${system({
    background: {
      property: "backgroundColor",
      scale: "colors"
    }
  })}
  &:hover {
    background: black;
  }
`;

const EmptyCartImageWrapper = styled(Box)`
  height: 100%;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  width: 85%;
  margin: -5% auto 1rem auto;
  ${system({
    backgroundImage: {
      property: "backgroundImage"
    }
  })}
`;

const CartSubTitle = styled(SubTitle)`
  width: 100%;
  ${margin};
`;
const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 5rem;
`;

const _InputField = styled(TextField)`
  ${width};
  :not(:last-child) {
    ${system({
      marginRight: {
        property: "marginRight"
      }
    })}
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HalfInput = styled(_InputField)`
  :not(:last-child) {
    margin-right: 2rem;
  }
`;
const ThirdInput = styled(_InputField)`
  display: flex;
  flex-grow: 1;
  max-width: 11rem;
  :not(:last-child) {
    margin-right: 1.75rem;
  }
`;
const FullInput = styled(_InputField)`
  width: 36rem;
  max-width: 100%;
  margin: 0 auto;
  align-self: center;
`;
const HalfBox = styled.div`
  width: 100%;
  text-align: left;
  align-items: center;
  display: flex;
  :not(:last-child) {
    margin-right: 2rem;
  }
  ${alignSelf}
`;
const DisclaimerBox = styled(Box)`
  padding: 2rem;
  border: 2px solid #e6ebf1;
  border-radius: 5px;
  ${maxWidth}
  margin: 0 auto;
`;
const DisclaimerText = styled.p`
  color: #525f7f;
  font-size: 14px;
  text-align: left;
  margin: 0;
`;
const StripeLink = styled.a`
  text-decoration: none;
  color: #6772e5;
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  line-height: 26px;
  :hover {
    color: #32325d;
  }
`;

const InputField = ({ children }) => (
  <_InputField width={["100%", "80%", "80%", "80%", "100%"]}>
    {children}
  </_InputField>
);

export {
  Icon,
  SVGWrapper,
  DrawerButton,
  EmptyCartImageWrapper,
  CartSubTitle,
  Form,
  InputField,
  _InputField,
  Row,
  HalfInput,
  DisclaimerBox,
  DisclaimerText,
  StripeLink,
  ShoppingCartIcon,
  LoginIcon,
  LocalShippingIcon,
  CreditCardIcon,
  ConfirmIcon,
  HalfBox,
  FullInput,
  ThirdInput
};
