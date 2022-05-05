import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurentView from "./pages/restaurent-view"
import CartView from "./pages/cart-view";
import Checkout from "./pages/checkout-page";
import { CartProvider } from "./cartcontext";
import { AppbarProvider } from "./appbarcontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountView from "./pages/account-view";
import FirstPage from "./pages/firstpage";


ReactDOM.render(
  <CartProvider>
    <AppbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:restaurentId" element={<RestaurentView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<AccountView />} />
          <Route path="/firstpage" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </AppbarProvider>
  </CartProvider>,

  document.getElementById("root")
);
