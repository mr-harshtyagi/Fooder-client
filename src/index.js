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
import Login from "./pages/login";
import Signup from "./pages/signup";
import OrderHistory from "./pages/orderhistory";
import OrderStatus from "./pages/orderstatus";


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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orderstatus" element={<OrderStatus />} />
        </Routes>
      </BrowserRouter>
    </AppbarProvider>
  </CartProvider>,

  document.getElementById("root")
);
