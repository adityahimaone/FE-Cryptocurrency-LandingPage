import React from "react";
import Layout from "../components/Layout";
import Footer from "../Footer";
import CryptocurrencySection from "../sections/Cryptocurrency";
import HeroSection from "../sections/Hero";
import BuyAndTradeSection from "../sections/BuyAndTrade";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <Footer />
    </Layout>
  );
}
