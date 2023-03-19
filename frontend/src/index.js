import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { LoginProvider } from "./contexts/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LoginProvider>
  </BrowserRouter>
);
