import React from "react";
import { Header } from "parts/Header";
import { SiteMap } from "parts/SiteMap";
import { Footer } from "parts/Footer";
import { Breadcrumb } from "components/Breadcrumb";
import { DetailsPage } from "parts/DetailsPage/DetailsPage";
import { Suggestions } from "parts/DetailsPage/Suggestions";

export const Details = () => {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/98765", name: "Office room" },
          { url: "/categories/98765/products/12345", name: "Details" },
        ]}
      />
      <DetailsPage />
      <Suggestions />
      <SiteMap />
      <Footer />
    </>
  );
};
