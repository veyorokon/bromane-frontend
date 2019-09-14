import React from "react";
import { Text } from "components";
import * as S from "./styled";
import { StyledLink } from "components";

class Footer extends React.Component {
  render() {
    return (
      <S.FooterWrapper bg="black.1">
        <S.FooterContainer>
          <S.FooterRow>
            <S.FooterCol width="50%">
              <S.FooterHeader>Our mission</S.FooterHeader>
              <S.FooterText textAlign="justify">
                We want to help bros get their hair back in a way that doesn
                {"'"}t break the bank.
              </S.FooterText>
            </S.FooterCol>

            <S.FooterCol width="25%">
              <S.FooterHeader>Questions?</S.FooterHeader>
              <S.FooterText textAlign="justify">
                Send us an email: support@bromane.com
              </S.FooterText>
            </S.FooterCol>
            <S.FooterCol width="25%">
              <S.FooterHeader>Links</S.FooterHeader>
              <S.FooterText textAlign="justify">
                <StyledLink to="/terms-of-service">Terms of service</StyledLink>
              </S.FooterText>
              <S.FooterText textAlign="justify">
                <StyledLink to="/privacy-policy">Privacy policy</StyledLink>
              </S.FooterText>
            </S.FooterCol>
          </S.FooterRow>
          <S.FooterRow>
            <S.FooterCol width="50%">
              <S.FooterHeader>Need to Cancel?</S.FooterHeader>
              <S.FooterText textAlign="justify">
                No questions asked, email: support@bromane.com
              </S.FooterText>
            </S.FooterCol>
          </S.FooterRow>
          <S.HzLine />
          <S.FooterRow>
            <S.FooterCol width="50%">
              <S.FooterText>
                Copyright &copy; 2019 All Rights Reserved by Bromane.
              </S.FooterText>
            </S.FooterCol>
          </S.FooterRow>
        </S.FooterContainer>
      </S.FooterWrapper>
    );
  }
}

export default Footer;
