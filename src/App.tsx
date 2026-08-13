import React from "react";
import Navbar from "./assets/components/navbar/Navbar";
import Hero from "./assets/components/hero/Hero";
import About from "./assets/components/about/About";
import Developer from "./assets/components/devsection/Developer";
import Subscribe from "./assets/components/subscribe/Subscribe";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
