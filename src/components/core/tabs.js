import React from "react";
import styled from "styled-components";
import { themedComponent } from "lib";
import { Box } from "./themedComponents";

/*
<Tabs>
  <TabHeaders>
    <Tab>SomeName</Tab>
  </TabHeaders>
  <TabComponents>
    <Panel>Here is one panel</Panel>
  </TabComponents>
</Tabs>
 */

const Tabs = Box;
const TabHeaders = themedComponent(styled.ul``);
const TabComponents = themedComponent(styled.div``);
const Tab = themedComponent(styled.li``);
const Panel = Box;

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  getInitialState() {
    return {
      selected: this.props.selected || 0
    };
  }

  handleChange = index => {
    this.setState({ selected: index });
  };

  render() {
    return (
      <Tabs>
        <TabHeaders>
          {this.props.tabHeaders.map((elem, index) => {
            return (
              <Tab key={index} onClick={() => this.handleChange(index)}>
                {elem}
              </Tab>
            );
          })}
        </TabHeaders>
        <TabComponents>
          {this.props.children[this.state.selected]}
        </TabComponents>
      </Tabs>
    );
  }
}

export { Tabs, TabHeaders, TabComponents, Tab, Panel, TabComponent };
