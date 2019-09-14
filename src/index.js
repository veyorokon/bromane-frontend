import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { StripeProvider } from "react-stripe-elements";
import theme from "assets/theme";
import Home from "layouts/Home.jsx";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import * as fonts from "assets/fonts";

const hist = createBrowserHistory();

const client = new ApolloClient({
  uri: "http://192.168.1.64:8000/api/graphql/"
});

// core components
const muiTheme = createMuiTheme({
  typography: {
    fontSize: "16px",
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont," +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
});

const Style = createGlobalStyle`
.StripeElement {
  box-sizing: border-box;
  height: 6rem;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@font-face {
  font-family: 'Porto';
  src: local('Porto'),
  url(${fonts.Porto}) format('truetype');
}

@font-face {
  font-family: 'SofiaProRegular';
  src: local('SofiaProRegular'), url(${fonts.SofiaPro}) format('truetype');
}


  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  body{
    margin:0;
    font-size: 1.6rem;
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
`;

const Root = styled.div`
  line-height: 1.5;
  font-family: "SofiaProRegular", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <StripeProvider apiKey="pk_test_e9dOnmxcxduTukgPfhqBkZGc">
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Root>
            <Style />
            <Router history={hist}>
              <Route path="/" component={Home} />
            </Router>
          </Root>
        </MuiThemeProvider>
      </ThemeProvider>
    </StripeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
