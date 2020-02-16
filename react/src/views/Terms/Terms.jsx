import React from "react";
import PropTypes from "prop-types";
import { Box } from "components";
import styled from "styled-components";
import Main from "./Sections/Main";
import { withRouter, Link } from "react-router-dom";
import { NavBar, Footer } from "views/Home/Sections";

const TermsWrapper = styled(Box)`
  position: relative;
`;

class _TermsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  toggleDrawer = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <TermsWrapper>
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
      </TermsWrapper>
    );
  }
}
const TermsContent = _TermsContent;

function Terms(props) {
  return <TermsContent {...props} />;
}

export default withRouter(Terms);
