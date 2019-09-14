import React from "react";
import PropTypes from "prop-types";
import { Box } from "components";
import styled from "styled-components";
import Main from "./Sections/Main";
import { withRouter, Link } from "react-router-dom";
import { NavBar } from "views/Home/Sections";
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
      </PrivacyWrapper>
    );
  }
}
const PrivacyContent = _PrivacyContent;

function Privacy(props) {
  return <PrivacyContent {...props} />;
}

export default withRouter(Privacy);
