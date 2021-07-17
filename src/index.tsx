import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";
import { ToastNotificationProvider } from "./hooks/ToastNotificationContext";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Transaction one",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("http://localhost:3000/api/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("http://localhost:3000/api/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <ToastNotificationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToastNotificationProvider>,
  document.getElementById("root")
);
