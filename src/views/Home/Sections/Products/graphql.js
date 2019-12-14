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
        product {
          id
          name
          description
        }
      }
    }
  }
`;

export {PRODUCTS};
