import gql from "graphql-tag";

const USER = gql`
  query user($token: String!) {
    user(token: $token) {
      id
      email
      firstName
      lastName
    }
  }
`;

const CREATE_ACCOUNT = gql`
  mutation CreateUser(
    $email: String!
    $firstName: String!
    $lastName: String
    $password: String!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      token
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser(
    $token: String!
    $addressLine1: String!
    $addressLine2: String
    $addressCity: String!
    $addressState: String!
    $addressZip: String!
  ) {
    updateUser(
      token: $token
      addressLine1: $addressLine1
      addressLine2: $addressLine2
      addressCity: $addressCity
      addressState: $addressState
      addressZip: $addressZip
    ) {
      user {
        id
        addressZip
      }
    }
  }
`;

const SET_STRIPE_CARD = gql`
  mutation StripeCard(
    $cvc: String!
    $expMonth: String!
    $expYear: String!
    $number: String!
    $token: String!
  ) {
    setStripeCard(
      token: $token
      cvc: $cvc
      expMonth: $expMonth
      expYear: $expYear
      number: $number
    ) {
      user {
        id
      }
    }
  }
`;

const PLACE_ORDER = gql`
  mutation CreateOrder(
    $addressCity: String!
    $addressLine1: String!
    $addressLine2: String
    $addressState: String!
    $addressZip: String!
    $cardToken: String!
    $addressName: String!
    $plans: [Int]
  ) {
    createOrder(
      cardToken: $cardToken
      plans: $plans
      addressCity: $addressCity
      addressLine1: $addressLine1
      addressLine2: $addressLine2
      addressState: $addressState
      addressZip: $addressZip
      addressName: $addressName
    ) {
      orderBox {
        id
      }
    }
  }
`;

const CREATE_EMAIL_SUBSCRIBER = gql`
  mutation createEmailSubscriber($email: String!) {
    CreateEmailSubscriber(email: $email) {
      emailSubscriber {
        id
      }
    }
  }
`;

const GET_STRIPE_TOKEN = gql`
  mutation StripeCard(
    $cvc: String!
    $expMonth: String!
    $expYear: String!
    $number: String!
  ) {
    getStripeToken(
      cvc: $cvc
      expMonth: $expMonth
      expYear: $expYear
      number: $number
    ) {
      cardToken
    }
  }
`;

export {
  CREATE_ACCOUNT,
  USER,
  UPDATE_USER,
  SET_STRIPE_CARD,
  PLACE_ORDER,
  GET_STRIPE_TOKEN,
  CREATE_EMAIL_SUBSCRIBER
};
