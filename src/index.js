import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import RestaurentView from "./pages/restaurent-view"
import CartView from "./pages/cart-view";
import Checkout from "./pages/checkout-page";
import { CartProvider } from "./cartcontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountView from "./pages/account-view";

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:restaurentId" element={<RestaurentView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/account" element={<AccountView />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>,

  document.getElementById("root")
);
