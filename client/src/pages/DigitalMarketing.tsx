import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import DigitalHero from "../components/DigitalMarketing/DigitalHero"
import ServicesSection from "../components/DigitalMarketing/ServicesSection"
import MarbleCTA from "../components/MarbleSEO/MarbleCTA"
import Footer from "../components/Footer";

export const DigitalMarketing = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full min-h-screen relative">
   <Navbar />
<DigitalHero />
<ServicesSection />
<MarbleCTA />
<Footer />

    </div>
  );
};
