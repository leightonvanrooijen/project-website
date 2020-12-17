import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://craft.leightonv.co.nz/api",
  cache: new InMemoryCache(),
});

ReactDOM.render(

    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router history={createBrowserHistory} >
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>,

  document.getElementById("root")
);

reportWebVitals();
