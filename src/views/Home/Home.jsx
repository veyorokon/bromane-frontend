/*
==============================================
                    IMPORTS
*/
import React from "react";
import { withRouter } from "react-router-dom";
import {
  NavBar,
  Hero,
  Solution,
  Incentive,
  Mission,
  Footer,
  Problem,
  CheckoutManager,
  Products
} from "./Sections";
import { Box, Drawer } from "components";
import styled from "styled-components";
import { position } from "styled-system";
/* l
==============================================
                    VIEW
*/

const HomeWrapper = styled(Box)`
  position: relative;
`;

const HomeSections = styled.section`
  ${position}
`;

class _HomeContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      originalBodyOverflow: document.body.style.overflow,
      cart: {},
      isComplete: false,
      isComingSoon: false
    };
  }

  toggleDrawer = event => {
    event.preventDefault();
    const { open } = this.state;
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = this.state.originalBodyOverflow;
    }
    if (this.state.isComplete && open) {
      this.setState({ open: !open, cart: {}, isComplete: false });
    } else {
      this.setState({ open: !open });
    }
  };

  getCartCount() {
    let cart = this.state.cart;
    let total = 0;
    for (var key in cart) {
      if (cart[key].hasOwnProperty("count")) {
        total += cart[key].count;
      }
    }
    return total;
  }

  getExclusiveCartCount() {
    let cart = this.state.cart;
    let total = 0;
    if (cart.hasOwnProperty("count")) {
      return 1;
    }
    return total;
  }

  getProductCount(product) {
    if (!this.state.cart[product.id]) {
      return 0;
    }
    return this.state.cart[product.id].count;
  }

  handleItemRemove = () => {
    this.setState({ cart: {} });
  };

  handleAddCartItem = product => {
    const productCount = this.getProductCount(product);
    const productCartItem = { count: productCount + 1, ...product };
    let newCart = this.state.cart;
    newCart[product.id] = productCartItem;
    let newState = this.state;
    newState.cart = newCart;
    newState.open = true;
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "AddToCart");
      }
    }
    this.setState({ newState });
  };

  replaceCartItem = product => {
    const productCartItem = { count: 1, ...product };
    let newCart = productCartItem;
    let newState = this.state;
    newState.cart = newCart;
    newState.open = true;
    this.setState({ newState });
  };

  handleComplete = () => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Purchase", {
          value: 20,
          currency: "USD",
          content_type: "product"
        });
      }
    }
    this.setState({ isComplete: true, cart: {} });
  };

  render() {
    const logoLeft = this.state.open ? "0" : "50%";
    const overlayEffect = this.state.open
      ? ["fixed", "fixed", "fixed", "fixed", "unset"]
      : ["relative"];
    const color = this.state.open
      ? ["yellow.0", "yellow.0", "yellow.0", "yellow.0", "black.0"]
      : ["yellow.0"];
    const navBG = this.state.open
      ? ["nav.0", "nav.0", "nav.0", "nav.0", "nav.1"]
      : ["nav.0"]; // Change depending on Y
    const { isComplete, isComingSoon } = this.state;
    const cartCount = isComingSoon ? 0 : this.getExclusiveCartCount();
    const isEmpty = !cartCount && !isComplete;
    const product = this.state.cart;
    return (
      <HomeWrapper>
        <NavBar
          color={color}
          bg={navBG}
          left={["50%", "50%", "50%", "50%", logoLeft]}
          toggleDrawer={this.toggleDrawer}
          cartItems={cartCount}
        />
        <HomeSections position={overlayEffect}>
          <Hero />
          <Problem />
          <Solution />
          <Incentive />
          <Products addCartItem={this.replaceCartItem} />
          <Mission />
        </HomeSections>
        <footer>
          <Footer />
        </footer>
        <Drawer
          style={{
            overflowY: "auto",
            minHeight: "calc(max-content)"
          }}
          title="Welcome"
          {...this.state}
          toggleDrawer={this.toggleDrawer}
          content={
            <CheckoutManager
              isComingSoon={isComingSoon}
              onCheckoutComplete={this.handleComplete}
              product={product}
              isEmpty={isEmpty}
              isComplete={isComplete}
              onItemRemove={() => this.handleItemRemove}
            />
          }
        ></Drawer>
      </HomeWrapper>
    );
  }
}

const HomeContent = _HomeContent;

function Home(props) {
  return <HomeContent {...props} />;
}

export default withRouter(Home);
