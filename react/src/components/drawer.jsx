import React from "react";
import styled, {css} from "styled-components";
import {ArrowRightCircle} from "styled-icons/feather/ArrowRightCircle";
import {system, display, width} from "styled-system";

const StyledDrawer = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 60;
  background: #f5faf7;
  grid-template-rows: 8rem 6rem 1fr;
  ${width}
  display: grid;
  ${props =>
    props.open
      ? css`
          ${system({
            transform: true
          })}
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
        `
      : css`
          transition-property: transform, -webkit-transform;
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
          transform: translate3d(100vw, 0, 0);
        `};
`;

const IconWrapper = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const DrawerTitle = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 2vw;
  grid-row: 1;
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  margin-right: 5rem;
  margin-left: 0 -5rem;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 55;
  position: fixed;
  top: 0;
  transition-property: z-index, background;
  transition-timing-function: ease-in(0.3, 0, 0, 1);
  ${display}
  ${props =>
    props.open
      ? css`
          z-index: 30;
          background: rgba(206, 208, 220, 0.97); //#CFD1DB nav
        `
      : css`
          z-index: -1;
          background: rgba(206, 208, 220, 0);
        `};
`;

const DrawerBody = styled.div`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  padding: 0 2vw 0 2vw;
  overflow-y: auto;
  grid-row: 3;
  ${props =>
    props.open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const ArrowRightIcon = styled(ArrowRightCircle)`
  color: #666;
  transition: all 0.2s;

  :hover {
    color: #4c4c50;
  }
  :active {
    color: black;
  }
`;

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    const {content, title} = this.props;
    return (
      <React.Fragment>
        <Overlay
          onClick={this.props.toggleDrawer}
          {...this.props}
          display={["block"]}
        />
        <StyledDrawer
          width={["100vw", "100vw", "100vw", "100vw", "50vw"]}
          transform={[
            "translate3d(0vw, 0, 0)",
            "translate3d(0vw, 0, 0)",
            "translate3d(0vw, 0, 0)",
            "translate3d(0vw, 0, 0)",
            "translate3d(50vw, 0, 0)"
          ]}
          {...this.props}
        >
          <DrawerTitle>
            <IconWrapper>
              <ArrowRightIcon onClick={this.props.toggleDrawer} />
            </IconWrapper>
            <TitleWrapper>{title}</TitleWrapper>
          </DrawerTitle>
          <DrawerBody {...this.props}>{content}</DrawerBody>
        </StyledDrawer>
      </React.Fragment>
    );
  }
}

export {Drawer};
