/*
==============================================
                    IMPORTS
*/
import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as BromaneLogo } from "assets/logo/logo-desktop.svg";
import * as S from "./styled";
import { StyledLink } from "components/styled";
/*
==============================================
                    VIEW
*/
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { left, color, bg, cartItems } = this.props;
    return (
      <S.NavContainer
        width={"100%"}
        height={["7rem", "8rem"]}
        bg={bg}
        padding={["0 0", "5px 1rem"]}
      >
        <S.NavItemsContainer color={color} width="100%">
          <S.NavFlex height="100%" width="33%" alignItems="center">
            <S.SVGWrapper width={["3rem", "4rem"]}>
              <BromaneLogo />
            </S.SVGWrapper>
          </S.NavFlex>
          <S.LogoWrapper height="100%" width="33%" alignItems="center">
            <S.LogoText
              left={left}
              fontSize={["1.8rem", "2rem"]}
              fontFamily="logo"
              fontWeight="bold"
              letterSpacing={["2px", "4px"]}
            >
              <StyledLink to="/">BROMANE</StyledLink>
            </S.LogoText>
          </S.LogoWrapper>
          <S.NavFlex justifyContent="flex-end" height="100%" width="33%">
            <S.SVGWrapper
              onClick={this.props.toggleDrawer}
              width={["3rem", "4rem"]}
            >
              {cartItems > 0 && (
                <S.Badge
                  top={["20%", "15%"]}
                  width={["1.5rem", "2rem"]}
                  height={["1.5rem", "2rem"]}
                  background="black.1"
                >
                  {cartItems}
                </S.Badge>
              )}
              <S.ShoppingCartIcon color="yellow.0" />
            </S.SVGWrapper>
          </S.NavFlex>
        </S.NavItemsContainer>
      </S.NavContainer>
    );
  }
}

export default withRouter(NavBar);
