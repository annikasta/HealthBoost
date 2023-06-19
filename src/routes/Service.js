import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import React from "react";
import Product from "../components/Produkt/produkt";
import Slider from "../components/Produkt/SliderT/Slider";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1481349758547-36a0382e3394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
        title="Produkte"
        btnClass="hide"
      />
      <Slider />
      <Product />
      <Footer />
    </>
  );
}

export default Service;
