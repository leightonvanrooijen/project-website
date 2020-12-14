import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, browserHistory } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://leightonv.co.nz:81/api",
  cache: new InMemoryCache(),
});

ReactDOM.render(

    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router browserHistory>
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
