import React from "react";
import {
  Box,
  Text,
  RightCallOut,
  LeftCallOut,
  CallToAction,
  Title,
  SubTitle
} from "components";
import {withRouter} from "react-router-dom";
import ReactCompareImage from "react-compare-image";

import mobileBefore from "assets/img/guy-before-mobile-compressed.jpeg";
import mobileAfter from "assets/img/guy-after-mobile-compressed.jpeg";

import desktopBefore from "assets/img/guy-before-desktop-compressed.jpeg";
import desktopAfter from "assets/img/guy-after-desktop-compressed.jpeg";
import animateScrollTo from "animated-scroll-to";

import * as S from "./styled";

export const scrollElementIntoView = (
  element: HTMLElement,
  behavior?: "smooth" | "instant" | "auto"
) => {
  let scrollTop = window.pageYOffset || element.scrollTop;

  // Furthermore, if you have for example a header outside the iframe
  // you need to factor in its dimensions when calculating the position to scroll to
  const headerOutsideIframe = window.parent.document.getElementsByClassName(
    "myHeader"
  )[0].clientHeight;

  const finalOffset =
    element.getBoundingClientRect().top + scrollTop + headerOutsideIframe;

  window.parent.scrollTo({
    top: finalOffset,
    behavior: behavior || "auto"
  });
};

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
        style={{zIndex: 4, height: "fit-content", userSelect: "none"}}
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
        id="how"
      >
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={"5% 10% 5% 10%"}
        >
          <Title textAlign="center">
            Satisfaction guaranteed or your money back
          </Title>
          <SubTitle textAlign="center">
            Need to contact us for anything? Email us at:{" "}
            <a
              style={{textDecoration: "none", color: "purple"}}
              href="mailto:support@bromane.com"
            >
              support@bromane.com
            </a>
          </SubTitle>
        </S.TitleWrapper>
        <RightCallOut
          title={"What are hair building fibers?"}
          media={videoMedia}
        >
          Bromane is a powdered blend of natural cotton fibers and minerals.
          When applied, the fibers bond to thinning hair and eachother - adding
          density and rebuilding the look of your natural hair.
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
          title={"How long will it last?"}
          mobileMedia={mobileMedia}
          desktopMedia={desktopMedia}
        >
          One bottle lasts one month and an application lasts all day. It won't
          sweat out with rigorous exercise and is rain resistant so it won't
          streak. We designed our formula to wash out with shampoo and water.
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
