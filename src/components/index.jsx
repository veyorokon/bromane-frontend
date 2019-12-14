import React from "react";
import styled, {keyframes} from "styled-components";
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  fontFamily,
  lineHeight,
  height,
  flexWrap,
  flexDirection,
  minHeight,
  minWidth,
  maxHeight,
  justifyContent,
  background,
  alignItems,
  backgroundPosition,
  padding,
  margin,
  position,
  display,
  textAlign,
  borderColor,
  bottom,
  right,
  system
} from "styled-system";
import {Drawer} from "./drawer";
import {Panel, Tabs} from "./forms";
import {Link as DomLink} from "react-router-dom";

import {Close} from "styled-icons/evil/Close";

/*
==============================================
                    BOX
*/
//transition: all .3s ease-in-out;
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${height}
  ${minHeight}
  ${minWidth}
  ${maxHeight}
  ${backgroundPosition}
  transition: all .3s ease-in-out;

`;
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
};

/*
==============================================
                    BUTTON
*/
const Button = styled.button`
${space}
${fontSize}
${width}
${color}
${background}
cursor: pointer;
outline:none;
transition: all .3s ease-in-out;
`;
Button.propTypes = {
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...background.propTypes
};

/*
==============================================
                    TEXT
*/
const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${fontFamily}
  /* transition: all .3s ease-in-out;*/
`;
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes
};

/*
==============================================
                    FLEX
*/
const Flex = styled(Box)`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  transition: all .3s ease-in-out;

`;
Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
};

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

/*
==============================================
                 Animations
*/
const appearKeyFrame = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const AnimatedText = styled(Text)`
  animation-name: ${appearKeyFrame};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${fontFamily}
`;

const AnimatedSpan = styled.span`
  animation-name: ${appearKeyFrame};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

/*
==============================================
                 Title & Subtitle
*/

const SubTitleWrapper = styled(AnimatedText)`
  letter-spacing: 1px;
  animation-delay: 0.1s;
  line-height: calc(3.2rem + (8 * (100vw - 48rem) / 672));
  ${textAlign}
  ${fontSize}
  ${lineHeight}
  ${margin}
`;
const TitleWrapper = styled(AnimatedText)`
  padding-bottom: 1.5rem;
  animation-delay: 0.1s;
  letter-spacing: -0.75px;
  line-height: calc(3rem + (50 * (100vw - 22.5rem) / 1080));
  ${textAlign}
  ${fontSize}
  ${lineHeight}
  ${margin}
`;

const SubTitle = ({children, textAlign, margin = "3rem auto", ...rest}) => (
  <SubTitleWrapper
    fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "2rem", "2rem", "2rem"]}
    margin={margin}
    textAlign={textAlign}
    {...rest}
  >
    {children}
  </SubTitleWrapper>
);

const Title = ({children, textAlign}) => (
  <TitleWrapper
    fontSize={["3rem", "3.6rem", "4rem", "4rem", "4.2rem", "4.4rem", "4.4rem"]}
    lineHeight={["3.6rem", "4.6rem", "5.8rem"]}
    fontWeight={["400", "400", "500"]}
    textAlign={textAlign}
  >
    {children}
  </TitleWrapper>
);

const CallToAction = styled(AnimatedText, Button)`
  display: flex;
  border-radius: 3px;
  border: 0;
  line-height: 4rem;
  font-size: 1.5rem;
  transition: all 0.2s;
  text-transform: uppercase;
  animation-delay: 0.6s;
  text-align: center;
  cursor: pointer;
  min-width: max-content;
  justify-content: center;
  &:hover {
    background: #f2b290;
  }
  &:active {
    background: #f29422;
  }
  ${display}
  ${padding}
  ${width}
`;

const Link = styled.a`
  ${color}
  ${fontSize}
`;

/*
==============================================
                 Callout
*/

const CallOutGrid = styled.div`
  padding: 0rem 0 6rem 0;
  display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  min-height: 100%;
  ${margin}
`;

const CORight = styled(CallOutGrid)``;

const RightCORightContainer = styled.div`
  align-self: center;
  justify-self: end;
  grid-column: 1;
  grid-row: 1;
  ${height}
  ${margin}
  ${width}
  ${padding}
  ${position}
  ${bottom}
`;

const RightCOLeftContainer = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  grid-column: 1;
  grid-row: 1;
  ${background}
  ${width}
  ${padding}
  ${margin}
`;

const COContent = styled(AnimatedText)`
  ${padding}
  animation-delay: 0.1s;
`;

const COTitle = styled(Text)`
  margin: 0;
  padding-bottom: 3.6rem;
  line-height: calc(3rem + (50 * (100vw - 22.5rem) / 1080));
  font-weight: bold;
  ${fontSize}
  ${color}
`;

const COBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;
`;

// const COHr = styled.hr`
//   grid-column: 1;
//   grid-row: 1;
//   width: 2.25rem;
//   height: 2px;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
// `;
const AdaptiveText = styled.div`
  grid-column: 1;
  grid-row: 1;
  padding-right: calc(3rem + (12 * (100vw - 48rem) / 672));
  font-size: calc(2rem + (8 * (100vw - 48rem) / 672));
  line-height: calc(3.2rem + (8 * (100vw - 48rem) / 672));
  margin-bottom: 2.4rem;
  ${color}
`;
const COMarkdown = styled(AdaptiveText)``;
const COButtonContainer = styled(Box)`
  grid-column: 1;
  grid-row: 2;
  width: 13.25rem;
  border: 0;
  cursor: pointer;
  display: inline-block;
  text-aligh: center;
`;

const contentPadding = ["4rem 3rem", "4rem 3rem", "4rem 3rem", "unset"];

const titleFontSize = [
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
  "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
  "calc(0.5rem + (56 * (100vw - 35.5rem) / 1080))"
];

class RightCallOut extends React.Component {
  render() {
    const {title, children, media} = this.props;
    const textContainerWidth = [
      "100%",
      "100%",
      "100%",
      "calc(30.75rem + (348 * (100vw - 48rem) / 672))"
    ];
    const textContainerPadding = [
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      `8rem calc(6.75rem + (72 * (100vw - 48rem) / 672)) 8rem
      calc(2.4rem + (36 * (100vw - 48rem) / 672))`
    ];
    const textContainerMargin = [
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "unset"
    ];
    const mediaContainerHeight = [
      "calc(9rem + (272 * (100vw - 22.5rem) / 408))",
      "calc(9rem + (272 * (100vw - 22.5rem) / 408))",
      "calc(9rem + (272 * (100vw - 22.5rem) / 408))",
      "calc(15.5rem + (232 * (100vw - 48rem) / 672))"
    ];
    const mediaContainerMargin = ["unset", "unset", "unset", "4rem 0 4rem 0"];
    const mediaContainerWidth = [
      "auto",
      "auto",
      "auto",
      "calc(28rem + (336 * (100vw - 48rem) / 672))",
      "calc(28rem + (336 * (100vw - 48rem) / 672))",
      "calc(20rem + (336 * (100vw - 48rem) / 672))"
    ];
    const mediaContainerPadding = ["0 3rem", "0 3rem", "0 3rem", "unset"];
    const mediaContainerPosition = [
      "absolute",
      "absolute",
      "absolute",
      "unset"
    ];
    const mediaContainerBottom = ["10%", "10%", "10%", "unset"];

    return (
      <CORight>
        <RightCOLeftContainer
          padding={textContainerPadding}
          width={textContainerWidth}
          margin={textContainerMargin}
          background="white.0"
        >
          <COContent padding={contentPadding}>
            <COTitle color={"black"} fontSize={titleFontSize}>
              {title}
            </COTitle>
            <COBody>
              <COMarkdown color={"black"}>{children[0]}</COMarkdown>
              <COButtonContainer>{children[1]}</COButtonContainer>
            </COBody>
          </COContent>
        </RightCOLeftContainer>
        <RightCORightContainer
          margin={mediaContainerMargin}
          height={mediaContainerHeight}
          width={mediaContainerWidth}
          padding={mediaContainerPadding}
          position={mediaContainerPosition}
          bottom={mediaContainerBottom}
        >
          {media}
        </RightCORightContainer>
      </CORight>
    );
  }
}

/*
==============================================
                 Callout
*/

const COLeftDesktop = styled(CallOutGrid)`
  padding: 8rem 0;
  grid-template-columns: 1fr 1fr;
  ${display}
`;

const COLeftMobile = styled(CallOutGrid)`
  padding: 0 0 8rem 0;
  grid-template-columns: 1fr;
  position: relative;
  ${display}
`;
const LeftCOLeftMobileContainer = styled(Box)`
  padding-bottom: 0;
  padding-left: calc(3rem + (72 * (100vw - 48rem) / 672));
  padding-right: calc(3rem + (72 * (100vw - 48rem) / 672));
  height: auto;
  ${bottom}
  ${position}
  ${background}
  ${width}
  ${margin}
`;

const LeftCOLeftDesktopContainer = styled(Box)`
  padding-bottom: 0;
  padding-left: calc(1rem + (72 * (100vw - 48rem) / 672));
  padding-right: calc(1rem + (72 * (100vw - 48rem) / 672));
  height: auto;
  ${bottom}
  ${position}
  ${background}
  ${width}
  ${margin}
`;

const LeftCORightContainerDesktop = styled(Flex)`
  grid-column: 2;
  display: flex;
  margin-top: 8rem;
  margin-bottom: 0;
  padding: 8rem calc(1.5rem + (36 * (100vw - 48rem) / 672)) 5rem
    calc(2.5rem + (80 * (100vw - 48rem) / 672));
  ${background}
`;

const LeftCORightContainerMobile = styled(Flex)`
  display: flex;
  ${padding}
  ${margin}

  ${background}
`;

class LeftCallOut extends React.Component {
  render() {
    const {title, children, desktopMedia, mobileMedia} = this.props;
    const textContainerWidth = [
      "100%",
      "100%",
      "100%",
      "calc(27.75rem + (348 * (100vw - 48rem) / 672))"
    ];

    const desktopDisplay = ["none", "none", "none", "grid"];
    const mobileDisplay = ["grid", "grid", "grid", "none"];

    const mediaMobileContainerPosition = [
      "absolute",
      "absolute",
      "absolute",
      "unset"
    ];
    const mediaMobileContainerBottom = ["15%", "10%", "10%", "unset"];

    const textContainerPadding = [
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      `8rem calc(6.75rem + (72 * (100vw - 48rem) / 672)) 8rem
      calc(2.4rem + (36 * (100vw - 48rem) / 672))`
    ];
    const textContainerMargin = [
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "unset"
    ];
    return (
      <React.Fragment>
        <COLeftDesktop display={desktopDisplay}>
          <LeftCOLeftDesktopContainer>
            {desktopMedia}
          </LeftCOLeftDesktopContainer>
          <LeftCORightContainerDesktop
            width={textContainerWidth}
            background="white.0"
          >
            <COContent padding={contentPadding}>
              <COTitle color={"black.0"} fontSize={titleFontSize}>
                {title}
              </COTitle>
              <COBody>
                <COMarkdown color={"black.0"}>{children[0]}</COMarkdown>
                <COButtonContainer>{children[1]}</COButtonContainer>
              </COBody>
            </COContent>
          </LeftCORightContainerDesktop>
        </COLeftDesktop>

        <COLeftMobile display={mobileDisplay}>
          <LeftCORightContainerMobile
            padding={textContainerPadding}
            margin={textContainerMargin}
            background="white.0"
          >
            <COContent padding={contentPadding}>
              <COTitle color={"black.0"} fontSize={titleFontSize}>
                {title}
              </COTitle>
              <COBody>
                <COMarkdown color={"black.0"}>{children[0]}</COMarkdown>
                <COButtonContainer>{children[1]}</COButtonContainer>
              </COBody>
            </COContent>
          </LeftCORightContainerMobile>
          <LeftCOLeftMobileContainer
            position={mediaMobileContainerPosition}
            bottom={mediaMobileContainerBottom}
          >
            {mobileMedia}
          </LeftCOLeftMobileContainer>
        </COLeftMobile>
      </React.Fragment>
    );
  }
}

const ProductThumbnailCard = styled(Box)`
  display: flex;
  background: white;
  ${height}
  ${width}
  ${minHeight}
  margin: 2% auto 8% auto;
`;
const ProductThumbnail = styled.img`
  width: auto;
  height: 100%;
`;
const ProductDetail = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
  ${padding}
  ${fontSize}
`;
const ProductTitle = styled(Text)`
  margin-bottom: 0.5rem;
`;
const ProductSubtitle = styled(Text)`
  ${fontSize}
  margin-bottom: 0.5rem;
  ${color}
  :last-child {
    margin-top: auto;
  }
`;
const IconWrapper = styled.div`
  ${width}
  ${right}
  cursor: pointer;
  position: absolute;
  ${system({
    top: {
      property: "top"
    }
  })}
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const CloseIcon = styled(Close)`
  color: black;
  transition: all 0.2s;
  :hover {
    color: #4c4c50;
  }
  :active {
    color: black;
  }
`;

class ProductBox extends React.Component {
  render() {
    const {
      title,
      subtitle,
      price,
      description,
      onItemRemove,
      showItemRemove,
      plan
    } = this.props;
    return (
      <ProductThumbnailCard
        width={["100%", "80%", "80%", "80%", "100%", "90%", "80%"]}
        height={["12rem", "14.5rem"]}
        minHeight={["12rem", "14.5rem"]}
      >
        <ProductThumbnail src={this.props.img} />
        <ProductDetail
          padding={[
            "1rem 2.3rem 1rem 1rem",
            "1rem 3rem 1rem 1rem",
            "1rem 3rem 1rem 1rem",
            "1rem 3rem 1rem 1rem",
            "1rem 5rem 1rem 1rem",
            "1rem 5rem 1rem 1rem"
          ]}
          fontSize={["1.4rem", "1.6rem"]}
        >
          <ProductTitle>{title}</ProductTitle>
          <ProductSubtitle fontSize="0.6em" color="grey.1">
            {subtitle}
          </ProductSubtitle>
          <ProductSubtitle fontSize="0.8em" color="black.0">
            {price}
          </ProductSubtitle>
          <ProductSubtitle fontSize="0.6em" color="grey.1">
            {description}
          </ProductSubtitle>
          <IconWrapper
            top={["1%", "3%", "3%", "3%", "1%", "3%"]}
            right={["1%", "3%", "3%", "3%", "1%", "3%"]}
            width={["2.5rem", "2.5rem", "2.5rem", "2.5rem", "2.6rem"]}
          >
            {showItemRemove && <CloseIcon onClick={() => onItemRemove(plan)} />}
          </IconWrapper>
        </ProductDetail>
      </ProductThumbnailCard>
    );
  }
}

const ItemizedLineContainer = styled(Box)`
  ${width}
  margin: 2% auto 0 auto;
  line-height: 3;
  border-top: 1px solid;
  display: flex;
  justify-content: space-between;
  ${borderColor}
`;
const LineLabel = styled(Flex)`
  justify-content: flex-end;
  ${color}
`;

class ItemizedLine extends React.Component {
  render() {
    const {label, children, color} = this.props;
    return (
      <ItemizedLineContainer
        width={["100%", "80%", "80%", "80%", "100%", "90%", "80%"]}
        borderColor={color || "green.1"}
        color={color || "grey.1"}
      >
        <LineLabel>{label}</LineLabel>
        <LineLabel>{children}</LineLabel>
      </ItemizedLineContainer>
    );
  }
}

const StyledLink = styled(DomLink)`
  color: inherit;
  text-decoration: none;
`;

export {
  Box,
  Button,
  Text,
  Flex,
  FlexColumn,
  SubTitle,
  Title,
  RightCallOut,
  AnimatedText,
  AnimatedSpan,
  LeftCallOut,
  CallToAction,
  AdaptiveText,
  Link,
  Drawer,
  Panel,
  Tabs,
  ProductBox,
  ItemizedLine,
  StyledLink,
  appearKeyFrame
};
