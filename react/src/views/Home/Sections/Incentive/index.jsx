import React from "react";
import {FlexColumn, Title, SubTitle} from "components";
import productImg from "assets/img/all-products-compressed.jpeg";
import * as S from "./styled";

class Incentive extends React.Component {
  render() {
    return (
      <FlexColumn
        height={["fit-content"]}
        minHeight={["fit-content"]}
        bg={"green.0"}
      >
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={"4% 1rem 4% 1rem"}
        >
          <Title>Get your starter kit</Title>
          <SubTitle p={["0 5%", "0 10%"]} textAlign="center">
            Our starter kits include a one month supply of hair building powder,
            a precision applicator for better control and a free hairline
            touchup cloth.
          </SubTitle>
        </S.TitleWrapper>
        <S.ImageWrapper width={["85vw", "85vw", "80vw", "55vw", "40vw"]}>
          <S.Image src={productImg} />
        </S.ImageWrapper>
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={["1rem 5% 8rem 5%"]}
        >
          <SubTitle p={["0 5%", "0 10%"]} id="products" textAlign="center">
            If you aren't completely satisfied, we'll refund your order - no
            questions asked. Just email{" "}
            <a
              style={{textDecoration: "none", color: "purple"}}
              href="mailto:support@bromane.com?Subject=Refund order"
            >
              support@bromane.com
            </a>
            .
          </SubTitle>
        </S.TitleWrapper>
      </FlexColumn>
    );
  }
}

export default Incentive;
