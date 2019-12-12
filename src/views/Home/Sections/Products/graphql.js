import gql from "graphql-tag";

const PRODUCTS = gql`
  query product {
    product {
      id
      name
      description
      options
      inventory {
        id
        price
        description
        descriptionType
        image
      }
    }
  }
`;

export { PRODUCTS };
