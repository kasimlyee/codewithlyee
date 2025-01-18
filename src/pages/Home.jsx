import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TechnologiesGrid from "../components/TechnologyGrid";
//import Signup from "./Signup";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechnologiesGrid />
      <Footer />
    </div>
  );
}
