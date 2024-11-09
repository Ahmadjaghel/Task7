import React from "react";
import NavBar from "@/app/components/NaveBar/Page";
import Hero from "@/app/components/HomeComponents/Hero/Page";
import Popular from "@/app/components/HomeComponents/PopularDestinantions/Page";
import OurSite from "@/app/components/HomeComponents/OurSite/Page";
import ContactUs from "@/app/components/HomeComponents/ContactUs/Page";
import Services from "@/app/components/HomeComponents/Services/Page";
import BookNow from "@/app/components/HomeComponents/BookNow/Page";
import Cutomers from "@/app/components/HomeComponents/Customers/Page";
import Footer from "@/app/components/Footer/Page";
const HomePage = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/images/hero-home.png')] bg-no-repeat bg-cover min-h-[94.445vh]">
        <NavBar />
        <Hero />
      </div>
      <Popular />
      <OurSite />
      <ContactUs />
      <Services />
      <BookNow />
      <Cutomers />
      <Footer />
    </div>
  );
};

export default HomePage;
