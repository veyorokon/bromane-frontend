import React from "react";
import { Box, Text } from "components/core";
import { Title } from "components/styled";
import { CallToAction } from "components/composite";
import { RightCallOut, LeftCallOut } from "components/composite";
import { withRouter } from "react-router-dom";
import ReactCompareImage from "react-compare-image";

import mobileBefore from "assets/img/guy-before-mobile-compressed.jpeg";
import mobileAfter from "assets/img/guy-after-mobile-compressed.jpeg";

import desktopBefore from "assets/img/guy-before-desktop-compressed.jpeg";
import desktopAfter from "assets/img/guy-after-desktop-compressed.jpeg";

import animateScrollTo from "animated-scroll-to";

import * as S from "./styled";

// -> /video/bromane-video.mp4
class Solution extends React.Component {
  render() {
    const videoOptions = {
      controls: true,
      src: "https://bromane.com/static_files/video/bromane-video.mp4",
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    };
    const videoMedia = (
      <video
        playsInline
        autoPlay
        controls
        loop
        muted
        type="video/mp4"
        style={{
          borderRadius: "3px",
          width: "100%",
          height: "100%",
          outline: "none"
        }}
        {...videoOptions}
      />
    );
    const mobileMedia = (
      <S.BeforeAfterWrapper
        style={{ zIndex: 4, height: "fit-content", userSelect: "none" }}
      >
        <ReactCompareImage leftImage={mobileBefore} rightImage={mobileAfter} />
      </S.BeforeAfterWrapper>
    );

    const desktopMedia = (
      <Box
        style={{
          zIndex: 4,
          height: "fit-content",
          userSelect: "none",
          cursor: "pointer"
        }}
      >
        <ReactCompareImage
          leftImage={desktopBefore}
          rightImage={desktopAfter}
        />
      </Box>
    );
    return (
      <S.SolutionWrapper
        bg="green.0"
        height={["fit-content"]}
        minHeight={["fit-content"]}
        padding={["0", "0", "0", "0  0 0% 0"]} //0 0 8% 0
      >
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={"12rem 1rem 12rem 1rem"}
        >
          <Title>Your hair is now your choice</Title>
        </S.TitleWrapper>
        <RightCallOut title={"Density"} media={videoMedia}>
          Bromane's vegetarian fibers have an electrostatic coating and bind to
          your hair to give your glorious mane the density it deserves. Applying
          it is instant and the results look natural.
          <CallToAction
            onClick={() => animateScrollTo(document.querySelector("#products"))}
            color="black.0"
            bg="yellow.0"
          >
            <Text pt="5px" fontFamily="porto">
              Get Started
            </Text>
          </CallToAction>
        </RightCallOut>

        <LeftCallOut
          title={"Natural"}
          mobileMedia={mobileMedia}
          desktopMedia={desktopMedia}
        >
          A natural look that lasts all day - rain or shine and during
          excercise. Bromane stays in until you shower and wash with shampoo so
          you can keep your hair and your confidence.
          <CallToAction
            onClick={() => animateScrollTo(document.querySelector("#products"))}
            color="black.0"
            bg="yellow.0"
          >
            <Text pt="5px" fontFamily="porto">
              buy now
            </Text>
          </CallToAction>
        </LeftCallOut>
      </S.SolutionWrapper>
    );
  }
}

export default withRouter(Solution);
