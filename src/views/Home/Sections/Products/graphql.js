import gql from "graphql-tag";

const PRODUCTS = gql`
  query plan {
    plan {
      id
      price
      color
      stripePlanId
    }
  }
`;

export { PRODUCTS };
