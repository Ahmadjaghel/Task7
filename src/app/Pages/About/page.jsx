import Footer from "@/app/components/Footer/Page";
import Cutomers from "@/app/components/HomeComponents/Customers/Page";
import Hero from "@/app/components/HomeComponents/Hero/Page";
import NavBar from "@/app/components/NaveBar/Page";
import React from "react";

const About = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/images/hero-about.png')] bg-no-repeat bg-cover min-h-[94.445vh]">
        <NavBar />
        <Hero />
      </div>
      <Cutomers />
      <Footer />
    </div>
  );
};

export default About;
