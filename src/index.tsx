import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { clientHooks } from "./hooks/clientHooks";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={clientHooks}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
