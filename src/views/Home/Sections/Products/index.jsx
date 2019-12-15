import React, {useState} from "react";
import {SubTitle, Title, CallToAction, FlexColumn, Text} from "components";
import * as S from "./styled";
import {PRODUCTS} from "./graphql";
import {Query} from "react-apollo";

import {Button} from "styled-button-component";
import {Dropdown, DropdownItem, DropdownMenu} from "styled-dropdown-component";

import updateState from "lib/updateState";

class SimpleDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      selected: ""
    };
  }
  setHidden = hidden => {
    this.setState({hidden});
  };
  setSelected = selected => {
    const {updateInventorySelection, product} = this.props;
    this.setState({selected, hidden: true});
    const itemPlan = product.inventory.filter(
      option => option.description === selected
    )[0];
    updateInventorySelection(product, itemPlan);
  };
  render() {
    const {setHidden, setSelected} = this;
    const {hidden, selected} = this.state;
    const {type, options} = this.props;
    return (
      <Dropdown>
        <Button dropdownToggle onClick={() => setHidden(!hidden)}>
          {selected ? type + ": " + selected : type}
        </Button>
        <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
          {options.map(function(option) {
            return (
              <DropdownItem onClick={() => setSelected(option)} key={option}>
                {option}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const Image = ({img}) => {
  return <S.CardImage src={img} />;
};

class _Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: props.data
    };
  }

  handleUpdateInventorySelection = (productSelected, selectedItemPlan) => {
    updateState(
      this.state,
      ["selection", productSelected.id, "selected"],
      selectedItemPlan
    );
  };

  getSelectedInventory = product => {
    if (this.state.selection && this.state.selection[product.id])
      return this.state.selection[product.id].selected;
    return product.inventory[0];
  };

  render() {
    const {data, addCartItem} = this.props;
    const {handleUpdateInventorySelection, getSelectedInventory} = this;
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
          {data &&
            data.map(function(product) {
              let inventory;
              try {
                inventory = product.inventory[0];
              } catch {
                inventory = {};
              }
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
                  <SubTitle>{product.name}</SubTitle>
                  <Image
                    img={process.env.REACT_APP_BACKEND + inventory.image}
                  />
                  <S.CardBody alignItems="center">
                    {product.options.length > 1 ? (
                      <SimpleDropdown
                        product={product}
                        type={inventory.descriptionType}
                        options={product.options}
                        updateInventorySelection={
                          handleUpdateInventorySelection
                        }
                      />
                    ) : (
                      <span />
                    )}

                    <CallToAction
                      p="0 2rem 0 2rem"
                      color="black.0"
                      width={["100%", "80%", "80%", "80%", "100%"]}
                      bg={["#f2b290", "#f2b290", "#f2b290", "yellow.0"]}
                      onClick={() => addCartItem(getSelectedInventory(product))}
                    >
                      <Text pt="5px" fontFamily="porto">
                        ${inventory.price} - Add To Cart
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
        {({loading, error, data}) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`; //redirect on
          return <_Products {...this.props} data={data.product} />;
        }}
      </Query>
    );
  }
}

export default Products;
