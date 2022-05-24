import { Header } from "parts/Header";
import { Hero } from "parts/Hero";
import { BrowseRoom } from "parts/HomePage/BrowseRoom";
import { Client } from "parts/Client";
import { JustArrived } from "parts/HomePage/JustArrived";
import React from "react";
import { SiteMap } from "parts/SiteMap";
import { Footer } from "parts/Footer";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";

export const HomePage = () => {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <SiteMap />
      <Footer />
    </>
  );
};
