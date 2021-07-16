import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("http://localhost:3000/api/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("http://localhost:3000/api/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
