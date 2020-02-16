import React from "react";
import { Box, Panel, Tabs, ProductBox, ItemizedLine, Flex } from "components";
import productImg from "assets/img/products-thumbnail-compressed.jpeg";
import emptyCart from "assets/img/lookingup-cart-compressed.jpeg";
import MenuItem from "@material-ui/core/MenuItem";
import { CardElement, Elements } from "react-stripe-elements";
import { injectStripe } from "react-stripe-elements";
import { Mutation } from "react-apollo";

function Account(props) {
  const handleChange = name => event => {
    props.stateChange(name, event.target.value);
  };

  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 1rem auto"
        textAlign="center"
      >
        Welcome to Bromane!
      </S.CartSubTitle>
      <S.CartSubTitle
        margin="0 auto 3rem auto"
        fontSize="0.8em"
        textAlign="center"
      >
        Let{"'"}s setup your account.
      </S.CartSubTitle>

      <S.Row>
        <S.HalfInput
          required
          id="firstName"
          label="First Name"
          defaultValue=""
          margin="normal"
          onChange={handleChange("firstName")}
        />

        <S.HalfInput
          required
          id="lastName"
          label="Last Name"
          defaultValue=""
          margin="normal"
          onChange={handleChange("lastName")}
        />
      </S.Row>
      <S.FullInput
        required
        id="email"
        type="email"
        label="Email"
        defaultValue=""
        margin="normal"
        onChange={handleChange("email")}
      />
      <S.FullInput
        required
        id="password"
        type="password"
        label="Password"
        defaultValue=""
        margin="normal"
        onChange={handleChange("password")}
      />
    </Panel>
  );
}

const ShippingForm = () => {
  const [values, setValues] = React.useState({
    address1: "",
    address2: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <S.Form noValidate={false} autoComplete="off">
      <S.InputField
        required
        id="address1"
        type="address"
        label="Address Line 1"
        defaultValue=""
        margin="normal"
        onChange={handleChange("address1")}
      />
      <S.InputField
        required
        id="address2"
        type="address"
        label="Address Line 2"
        defaultValue=""
        margin="normal"
        onChange={handleChange("address1")}
      />
      <S.InputField
        required
        id="city"
        label="City"
        defaultValue=""
        margin="normal"
        onChange={handleChange("city")}
      />
      <S.Row>
        <S.HalfInput
          required
          id="state"
          label="State"
          defaultValue=""
          margin="normal"
          value={values.currency}
          onChange={handleChange("state")}
        >
          {states.map(state => (
            <MenuItem key={state.name} value={state.abbreviation}>
              {state.name}
            </MenuItem>
          ))}
        </S.HalfInput>

        <S.HalfInput
          required
          id="zip"
          label="Zip"
          defaultValue=""
          margin="normal"
          onChange={handleChange("zip")}
        />
      </S.Row>
    </S.Form>
  );
};

function Shipping(props) {
  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 1.5rem auto"
        textAlign="center"
      >
        Shipping Address
      </S.CartSubTitle>
      <ShippingForm />
    </Panel>
  );
}

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#c23d4b"
      }
    }
  };
};

class _CardForm extends React.Component {
  state = {
    errorMessage: ""
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    } else {
      this.setState({ errorMessage: "" });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <CardElement onChange={this.handleChange} {...createOptions()} />
        </label>
        <div className="error" role="alert">
          {this.state.errorMessage}
        </div>
      </form>
    );
  }
}

const CardForm = injectStripe(_CardForm);

function Payment(props) {
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
        <Elements>
          <CardForm />
        </Elements>
      </Box>
      <S.CartSubTitle
        margin="3rem auto 0 auto"
        fontSize="0.8em"
        textAlign="center"
      >
        <S.DisclaimerBox maxWidth={["100%", "80%", "80%", "80%", "100%"]}>
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

function Confirmation(props) {
  const title = "Bromane Starter Kit - " + props.product.color;
  const price = props.product.price.toFixed(2);
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
              1600 Villa street
              <br /> Apt. 119
              <br />
              Mountain View, CA 94041
            </S.HalfBox>
          </Flex>
        </S.DisclaimerBox>
      </S.CartSubTitle>
    </Panel>
  );
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: { firstName: "", lastName: "", email: "", password: "" }
    };
  }

  handleStateChange(section, field, value) {
    let newState = this.state;
    newState[section][field] = value;

    this.setState({ ...newState });
  }

  onSubmit = async (mutation, values) => {
    console.log(values);
    console.log("ERERE");
    await mutation({ values });
  };

  render() {
    const { isEmpty } = this.props || true;
    const { account } = this.state;
    if (isEmpty) {
      return <EmptyCart />;
    }
    return (
      <Tabs selected={0}>
        <Overview
          title={
            <IconWrapper>
              <S.ShoppingCartIcon />
            </IconWrapper>
          }
          footerButton={<FooterButton>Continue</FooterButton>}
          callback={() => console.log("Checkout ")}
          {...this.props}
        />

        <Mutation
          title={
            <IconWrapper>
              <S.LoginIcon />
            </IconWrapper>
          }
          footerButton={<FooterButton>Next</FooterButton>}
          mutation={CREATE_ACCOUNT}
          callbackParams={account}
        >
          {createAccount => (
            <Account
              stateChange={(field, value) =>
                this.handleStateChange("account", field, value)
              }
              callback={async () => {
                await this.onSubmit(createAccount, account);
                setTimeout(() => {}, 600);
              }}
              {...this.props}
            />
          )}
        </Mutation>

        <Shipping
          title={
            <IconWrapper>
              <S.LocalShippingIcon />
            </IconWrapper>
          }
          footerButton={<FooterButton>Next</FooterButton>}
          callback={() => console.log("Shipping ")}
          {...this.props}
        />
        <Payment
          title={
            <IconWrapper>
              <S.CreditCardIcon />
            </IconWrapper>
          }
          footerButton={<FooterButton>Continue</FooterButton>}
          callback={() => console.log("Payment")}
          {...this.props}
        />
        <Confirmation
          title={
            <IconWrapper>
              <S.ConfirmIcon />
            </IconWrapper>
          }
          footerButton={<FooterButton>Place Order</FooterButton>}
          callback={() => console.log("Confirm")}
          {...this.props}
        />
      </Tabs>
    );
  }
}

export default Checkout;
