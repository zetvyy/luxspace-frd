import { Header } from "parts/Header";
import { Hero } from "parts/Hero";
import { BrowseRoom } from "parts/HomePage/BrowseRoom";
import { Client } from "parts/Client";
import { JustArrived } from "parts/HomePage/JustArrived";
import React from "react";
import { SiteMap } from "parts/SiteMap";
import { Footer } from "parts/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <SiteMap />
      <Footer />
    </>
  );
};
