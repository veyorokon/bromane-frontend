/*
==============================================
                    IMPORTS
*/
import React from "react";
import { Text, AnimatedText } from "components";
import { withRouter } from "react-router-dom";
import mobileImg from "assets/img/bromane-mobile-compressed.jpeg";
import desktopImg from "assets/img/bromane-desktop-compressed.jpeg";
import animateScrollTo from "animated-scroll-to";

import * as S from "./styled";

const CenterImage = `url(${mobileImg})`;
const RightImage = `url(${desktopImg})`;

/*
==============================================
                 Components
*/

function HeroTextContent({ color }) {
  return (
    <S.HeroTextBoxWrapper
      justifyContent={["flex-start", "flex-start", "flex-start", "center"]}
    >
      <S.HeroTextBox
        margin={[
          "4rem auto",
          "4rem auto",
          "4rem auto",
          "auto 3vw",
          "auto 5vw",
          "auto 9vw",
          "auto 10vw"
        ]}
      >
        <AnimatedText>
          <S.HeroText
            color={color}
            fontSize={[
              "3rem",
              "3.6rem",
              "3.6rem",
              "4rem",
              "4.6rem",
              "5rem",
              "5.6rem"
            ]}
            lineHeight={["3.6rem", "4rem", "4.6rem"]}
            textAlign={["center", "center", "center", "left"]}
            mb={["7px", "7px", "1.5rem"]}
          >
            Reclaim your mane.
          </S.HeroText>
        </AnimatedText>
        <S.HeroSubtitle
          mb={["2rem"]}
          textAlign={["center", "center", "center", "left"]}
          letterSpacing={["1px"]}
          fontSize={["1.6rem", "1.8rem", "2rem"]}
        >
          Skip surgery and go straight to hair
          <br />
          with Bromane instant hair fibers.
        </S.HeroSubtitle>
        <S.ButtonWrapper
          justifyContent={["center", "center", "center", "left"]}
        >
          <S.SignupButton
            display={["none", "initial"]}
            color="black.0"
            bg="yellow.0"
            onClick={() => animateScrollTo(document.querySelector("#products"))}
          >
            <Text pt="5px" fontFamily="porto">
              get started
            </Text>
          </S.SignupButton>
          <S.SignupButton
            display={["initial", "none"]}
            color="black.0"
            bg="yellow.0"
            onClick={() => animateScrollTo(document.querySelector("#products"))}
          >
            <Text pt="5px" fontFamily="porto">
              start
            </Text>
          </S.SignupButton>
        </S.ButtonWrapper>
      </S.HeroTextBox>
    </S.HeroTextBoxWrapper>
  );
}

class HeroSection extends React.Component {
  render() {
    return (
      <S.HeroContentWrapper>
        <S.HeroImageBox
          mt={["7rem", "8rem"]}
          backgroundImage={[CenterImage, CenterImage, CenterImage, RightImage]}
          bg={"purple.0"}
          justifyContent={["center", "center", "center", "flex-start"]}
        >
          <HeroTextContent />
        </S.HeroImageBox>
      </S.HeroContentWrapper>
    );
  }
}

/*
==============================================
                    VIEW
*/
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <S.HomeWrapper
        height={["95vh", "85vh", "85vh", "85vh"]}
        maxHeight={["80rem", "90rem", "75rem", "75rem"]}
        bg="white.0"
      >
        <HeroSection />
      </S.HomeWrapper>
    );
  }
}

export default withRouter(Hero);
