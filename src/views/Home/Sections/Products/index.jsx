import React from "react";
import { SubTitle, Title, CallToAction, FlexColumn, Text } from "components";
import * as S from "./styled";
import { PRODUCTS } from "./graphql";
import { Query } from "react-apollo";

function importAll(r) {
  return r.keys().map(r);
}

function getImageName(product) {
  let productImage = product.toLowerCase().replace(/ /g, "-");
  return productImage;
}

const images = importAll(
  require.context("assets/img/fiber-colors/", false, /\.(jpg|jpeg)$/)
);

function findImage(productColor) {
  var imageName = getImageName(productColor);
  for (let i = 0; i < images.length; i++) {
    if (images[i].includes(imageName)) return images[i];
  }
}

const Image = ({ img }) => {
  return <S.CardImage src={img} />;
};

class _Products extends React.Component {
  render() {
    const { data, addCartItem } = this.props;
    return (
      <FlexColumn
        height={["fit-content"]}
        minHeight={["fit-content"]}
        bg={"green.0"}
        padding={["0 0 20% 0", "0 0 20% 0", "0 0 20% 0", "0 4vw 12% 4vw"]}
      >
        <S.TitleWrapper
          color="black.0"
          textAlign={["center", "center", "center", "left"]}
          alignItems="center"
          p={"0 1rem 8% 1rem"}
          margin={["-6rem 0 0 0", "auto"]}
        >
          <Title>What{"'"}s your color?</Title>
        </S.TitleWrapper>
        <S.ProductsContainer
          gridTemplateColumns={[
            "1fr",
            "1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr 1fr"
          ]}
          bg="green.0"
        >
          {data.map(function(product) {
            let justify = "center";
            return (
              <S.Card
                maxWidth={[
                  "calc(26.5rem + ((136 * (100vw - 360px)) / 1079))",
                  "calc(39.5rem + ((136 * (100vw - 360px)) / 1079))",
                  "calc(21.5rem + ((136 * (100vw - 360px)) / 1079))",
                  "calc(21.5rem + ((136 * (100vw - 360px)) / 1079))",
                  "calc(19.5rem + ((136 * (100vw - 360px)) / 1079))"
                ]}
                width={["32rem", "40rem", "40rem", "32rem"]}
                justifySelf={justify}
                key={product.id}
              >
                <Image img={findImage(product.color)} />
                <S.CardBody alignItems="center">
                  <SubTitle>{product.color}</SubTitle>
                  <CallToAction
                    p="0 2rem 0 2rem"
                    color="black.0"
                    width={["100%", "80%", "80%", "80%", "100%"]}
                    bg={["#f2b290", "#f2b290", "#f2b290", "yellow.0"]}
                    onClick={() => addCartItem(product)}
                  >
                    <Text pt="5px" fontFamily="porto">
                      ${product.price} - Get starter kit
                    </Text>
                  </CallToAction>
                </S.CardBody>
              </S.Card>
            );
          })}
        </S.ProductsContainer>
        <FlexColumn p="2vw" mt="5%">
          <SubTitle textAlign="center" mt="5%">
            Hey bro. If you don{"'"}t see your color, check back soon. We{"'"}re
            always adding more.
          </SubTitle>
        </FlexColumn>
      </FlexColumn>
    );
  }
}

class Products extends React.Component {
  render() {
    return (
      <Query query={PRODUCTS} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`; //redirect on
          return <_Products {...this.props} data={data.plan} />;
        }}
      </Query>
    );
  }
}

export default Products;
