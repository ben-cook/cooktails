import "./index.css";

import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { client } from "./apollo/client";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
