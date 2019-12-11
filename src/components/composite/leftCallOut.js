import React from "react";
import { Box, Flex, Text } from "components/core";
import { AnimatedText, AdaptiveText } from "components/styled";
import { display, bottom, position } from "theme/fields";
import styled from "styled-components";

/*
==============================================
                 Callout
*/
const contentPadding = ["4rem 3rem", "4rem 3rem", "4rem 3rem", "unset"];
const titleFontSize = [
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
  "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
  "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
  "calc(0.5rem + (56 * (100vw - 35.5rem) / 1080))"
];
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

const COTitle = styled(Text)`
  margin: 0;
  padding-bottom: 3.6rem;
  line-height: calc(3rem + (50 * (100vw - 22.5rem) / 1080));
  font-weight: bold;
`;

const COBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;
`;

const COContent = styled(AnimatedText)`
  animation-delay: 0.1s;
`;
const CallOutGrid = styled(Box)`
  padding: 0rem 0 6rem 0;
  display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  min-height: 100%;
`;

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
`;

const LeftCOLeftDesktopContainer = styled(Box)`
  padding-bottom: 0;
  padding-left: calc(1rem + (72 * (100vw - 48rem) / 672));
  padding-right: calc(1rem + (72 * (100vw - 48rem) / 672));
  height: auto;
  ${bottom}
  ${position}
`;

const LeftCORightContainerDesktop = styled(Flex)`
  grid-column: 2;
  display: flex;
  margin-top: 8rem;
  margin-bottom: 0;
  padding: 8rem calc(1.5rem + (36 * (100vw - 48rem) / 672)) 5rem
    calc(2.5rem + (80 * (100vw - 48rem) / 672));
`;

class LeftCallOut extends React.Component {
  render() {
    const { title, children, desktopMedia, mobileMedia } = this.props;
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
          <Flex
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
          </Flex>
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

export default LeftCallOut;
