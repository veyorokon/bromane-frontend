/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { display } from "styled-system";

const HiddenBox = styled.span`
  ${display};
  overflow: hidden;
`;

class Hidden extends React.Component {
  getDisplayList = () => {
    const { down, bp } = this.props;
    var displayList = [];
    let i = 0;
    if (down) {
      displayList.push("none");
      for (i = 0; i < bp; i++) {
        displayList.push("none");
      }
      displayList.push("initial");
    } else {
      displayList.push("initial");
      for (i = 0; i < bp; i++) {
        displayList.push("initial");
      }
      displayList.push("none");
    }
    return displayList;
  };

  render() {
    const { children } = this.props;
    const display = this.getDisplayList();
    return <HiddenBox display={display}>{children}</HiddenBox>;
  }
}

Hidden.propTypes = {
  up: PropTypes.bool,
  down: PropTypes.bool,
  bp: PropTypes.number.isRequired
};

Hidden.defaultProps = {
  up: false,
  down: false
};

export default withTheme(Hidden);
