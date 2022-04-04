import React from "react";
import Layout from "../components/Layout";
import Footer from "../Footer";
import CryptocurrencySection from "../sections/Cryptocurrency";
import HeroSection from "../sections/Hero";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <Footer />
    </Layout>
  );
}
