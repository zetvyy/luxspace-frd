import React from "react";
import { Header } from "parts/Header";
import { Footer } from "parts/Footer";
import { Breadcrumb } from "components/Breadcrumb";
import { ShoppingCart } from "parts/CartPage/ShoppingCart";

export const Cart = () => {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <ShoppingCart />
      <Footer />
    </>
  );
};
