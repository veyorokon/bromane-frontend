import React from "react";
import {Panel, Tabs} from "components";
import emptyCart from "assets/img/lookingup-cart-compressed.jpeg";
import {Mutation} from "react-apollo";
import Overview from "./Overview";
import Shipping from "./Shipping";
import Account from "./Account";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import Success from "./Success";
import EmptyCart from "./EmptyCart";
import EmailSubscribe from "./EmailSubscribe";

import {
  PLACE_ORDER,
  GET_STRIPE_TOKEN,
  CREATE_EMAIL_SUBSCRIBER
} from "./graphql";

import * as S from "./styled";

function clearToken() {
  localStorage.removeItem("sessionToken");
}

function getToken() {
  try {
    const idToken = localStorage.getItem("sessionToken");
    return idToken;
  } catch (err) {
    clearToken();
    return null;
  }
}

const IconWrapper = ({children}) => (
  <S.SVGWrapper>
    <S.Icon
      width={["2.7rem", "3rem", "3.5rem", "3.5rem", "2.5rem", "3", "3.5rem"]}
    >
      {children}
    </S.Icon>
  </S.SVGWrapper>
);

const FooterButton = ({children}) => (
  <S.DrawerButton
    width={["100%", "80%", "80%", "80%", "100%"]}
    color={["white.0"]}
    background={["nav.0"]}
  >
    {children}
  </S.DrawerButton>
);

const ComingSoonCart = () => {
  return (
    <Tabs overrideDefault selected={1}>
      <Panel></Panel>
      <Panel
        title={
          <S.CartSubTitle textAlign="center">
            Hey Bro. Bromane is coming soon!
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

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {firstName: "", lastName: "", email: "", password: ""},
      shipping: {
        addressName: "",
        addressLine1: "",
        addressLine2: "",
        addressCity: "",
        addressZip: "",
        addressState: ""
      },
      payment: {number: "", expMonth: 0, expYear: 0, cvc: ""},
      cardToken: ""
    };
  }

  handleStateChange(section, field, value) {
    let newState = this.state;
    newState[section][field] = value;
    this.setState({...newState});
  }

  onSubmit = async (mutation, values, useToken = false, isComplete = false) => {
    if (useToken) values["token"] = getToken();
    const response = await mutation({variables: values});
    if (response.data.createUser) {
      localStorage.setItem("sessionToken", response.data.createUser.token);
    }
    if (isComplete) {
      this.props.onCheckoutComplete();
    }
    return response;
  };

  getOrderList = () => {
    const {cart} = this.props;
    let arr = [];
    for (var key in cart) {
      for (let q = 0; q < cart[key].quantity; q++) {
        arr.push(parseInt(key));
      }
    }
    return arr;
  };
  getToken = () => {
    const {payment} = this.state;
  };

  render() {
    const {isEmpty} = this.props || true;
    const {getOrderList} = this;
    const {onItemRemove, isComingSoon} = this.props;
    const {shipping} = this.state;
    if (isComingSoon) {
      return <ComingSoonCart />;
    }
    if (isEmpty) {
      return <EmptyCart />;
    }
    if (this.props.isComplete)
      return (
        <Success
          title={"Success!"}
          subtitle={"Your order has been placed"}
          body={"We'll send you an email once it has shipped."}
        />
      );
    const order = getOrderList();
    return (
      <Mutation mutation={GET_STRIPE_TOKEN}>
        {getToken => (
          <Mutation mutation={PLACE_ORDER}>
            {confirmOrder => (
              <Tabs selected={0}>
                <Overview
                  showItemRemove
                  onItemRemove={onItemRemove}
                  title={
                    <IconWrapper>
                      <S.ShoppingCartIcon />
                    </IconWrapper>
                  }
                  footerButton={<FooterButton>Continue</FooterButton>}
                  callback={() => {
                    if (typeof window !== "undefined") {
                      if (window.fbq != null) {
                        window.fbq("track", "InitiateCheckout");
                      }
                    }
                  }}
                  {...this.props}
                />
                <Shipping
                  title={
                    <IconWrapper>
                      <S.LocalShippingIcon />
                    </IconWrapper>
                  }
                  footerButton={<FooterButton>Next</FooterButton>}
                  stateChange={(field, value) =>
                    this.handleStateChange("shipping", field, value)
                  }
                  {...this.props}
                />
                <Payment
                  title={
                    <IconWrapper>
                      <S.CreditCardIcon />
                    </IconWrapper>
                  }
                  footerButton={<FooterButton>Continue</FooterButton>}
                  callback={async () => {
                    if (typeof window !== "undefined") {
                      if (window.fbq != null) {
                        window.fbq("track", "AddPaymentInfo");
                      }
                    }
                    const data = await this.onSubmit(
                      getToken,
                      this.state.payment,
                      true
                    );
                    console.log(data);
                    const token = data.data.getStripeToken.cardToken;
                    this.setState({cardToken: token});
                  }}
                  stateChange={(field, value) =>
                    this.handleStateChange("payment", field, value)
                  }
                  {...this.props}
                />
                <Confirmation
                  overrideDefault
                  title={
                    <IconWrapper>
                      <S.ConfirmIcon />
                    </IconWrapper>
                  }
                  shipping={shipping}
                  footerButton={<FooterButton>Place Order</FooterButton>}
                  callback={async () => {
                    let args = this.state.shipping;
                    args.cardToken = this.state.cardToken;
                    args.plans = order;
                    console.log(args);
                    await this.onSubmit(confirmOrder, args, false, true);
                    setTimeout(() => {}, 600);
                  }}
                  {...this.props}
                />
              </Tabs>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscriber: {email: ""},
      complete: false
    };
  }

  handleStateChange(section, field, value) {
    let newState = this.state;
    newState[section][field] = value;
    this.setState({...newState});
  }

  onSubmit = async (mutation, values) => {
    await mutation({variables: values});
    this.setState({complete: true});
  };

  render() {
    const {subscriber, complete} = this.state;
    if (complete)
      return (
        <Success
          title={"Subscribed!"}
          subtitle={"You're on our mailing list"}
          body={"We'll send you an email once we launch!"}
        />
      );
    return (
      <Mutation mutation={CREATE_EMAIL_SUBSCRIBER}>
        {createEmailSubscriber => (
          <Tabs selected={1}>
            <Panel></Panel>
            <EmailSubscribe
              overrideDefault
              footerButton={<FooterButton>Subscribe</FooterButton>}
              callback={async () => {
                await this.onSubmit(createEmailSubscriber, subscriber);
                setTimeout(() => {}, 600);
              }}
              stateChange={(field, value) =>
                this.handleStateChange("subscriber", field, value)
              }
              {...this.props}
            />
            <Panel></Panel>
          </Tabs>
        )}
      </Mutation>
    );
  }
}

const CheckoutManager = props => {
  if (props.isComingSoon) return <Subscribe {...props} />;
  return <Checkout {...props} />;
};

export default CheckoutManager;
