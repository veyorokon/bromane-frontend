import React from "react";
import { FlexColumn } from "components/core";
import { Title, SubTitle } from "components/styled";
import productImg from "assets/img/guy-looking-up-compressed.jpeg";
import * as S from "./styled";

/*
==============================================
                 Component
*/

class Problem extends React.Component {
  render() {
    return (
      <FlexColumn
        height={["fit-content"]}
        pb="0%"
        pt="6%"
        minHeight={["fit-content"]}
        bg={"green.1"}
      >
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={"5% 10% 5% 10%"}
        >
          <SubTitle textAlign="center">Because bro, you deserve hair.</SubTitle>
          <Title textAlign="center">
            Medication takes time, surgery takes money and when "just shave it"
            isn't good enough, put some hair on your mane. Why? Because bro, you
            deserve hair.
          </Title>
        </S.TitleWrapper>
        <S.ImageWrapper
          margin="auto"
          width={["85vw", "85vw", "80vw", "75vw", "50vw"]}
        >
          <S.Image src={productImg} />
        </S.ImageWrapper>
      </FlexColumn>
    );
  }
}

export default Problem;
