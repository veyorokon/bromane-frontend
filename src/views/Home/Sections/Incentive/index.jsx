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
          <SubTitle textAlign="center">
            A full head of hair from $19.99
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
          <SubTitle id="products" textAlign="center">
            Hey bro, you get free shipping on all your orders.
          </SubTitle>
        </S.TitleWrapper>
      </FlexColumn>
    );
  }
}

export default Incentive;
