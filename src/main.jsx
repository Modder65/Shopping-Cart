import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./global state/CartContext";
import Router from "./Router";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>
);
