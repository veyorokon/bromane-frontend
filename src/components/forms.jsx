import React from "react";
import styled from "styled-components";

const TabBody = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  position: fixed;
  margin: 2rem;
  width: 90%;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  height: 5rem;
  transition: all 0.5s;
  font-weight: 300;
  cursor: pointer;
  color: #aaa;
  &.selected {
    color: #444;
  }
`;

const PanelWrapper = styled.div`
  position: relative;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  height: 100%;
  z-index: 200;
`;

class Tabs extends React.Component {
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

  async handleChange(index, callback) {
    if (index > this.state.selected && callback) await callback();
    if (!this.props.children[this.state.selected].props.overrideDefault)
      this.setState({selected: index});
  }

  render() {
    return (
      <React.Fragment>
        <TabList>
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "selected" : "";
            return (
              <TabItem
                className={style}
                key={index}
                onClick={() => this.handleChange(index, null)}
                icon={elem.props.title}
              >
                {elem.props.title}
              </TabItem>
            );
          })}
        </TabList>

        <TabBody {...this.props.children[this.state.selected].props}>
          {this.props.children[this.state.selected]}
          <span
            onClick={async () =>
              this.handleChange(
                this.state.selected + 1,
                this.props.children[this.state.selected].props.callback
              )
            }
          >
            {this.props.children[this.state.selected].props.footerButton}
          </span>
        </TabBody>
      </React.Fragment>
    );
  }
}

class Panel extends React.Component {
  render() {
    return <PanelWrapper {...this.props}>{this.props.children}</PanelWrapper>;
  }
}

export {Tabs, Panel};
