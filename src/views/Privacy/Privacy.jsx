import React from "react";
import PropTypes from "prop-types";
import { Box } from "components";
import styled from "styled-components";
import Main from "./Sections/Main";
import { withRouter, Link } from "react-router-dom";
import { NavBar, Footer } from "views/Home/Sections";
const PrivacyWrapper = styled(Box)`
  position: relative;
`;

class _PrivacyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleDrawer = () => {
    this.props.history.push("/");
  };
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <PrivacyWrapper>
        <NavBar
          color={"yellow.0"}
          bg={"nav.0"}
          left={["50%", "50%", "50%", "50%"]}
          toggleDrawer={this.toggleDrawer}
        />
        <Main />
        <footer>
          <Footer />
        </footer>
      </PrivacyWrapper>
    );
  }
}
const PrivacyContent = _PrivacyContent;

function Privacy(props) {
  return <PrivacyContent {...props} />;
}

export default withRouter(Privacy);
