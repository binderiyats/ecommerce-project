import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { LoginProvider } from "./contexts/LoginContext";
import { ToastProvider } from "./contexts/ToastContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastProvider>
      <UserProvider>
        <LoginProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </LoginProvider>
      </UserProvider>
    </ToastProvider>
  </BrowserRouter>
);
