import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import DigitalWoodHero from "../components/DigitalMarketingWood/DigitalWoodHero"
import ServicesSection from "../components/DigitalMarketingWood/ServicesSection"
import Marble1CTA from "../components/DigitalMarketingWood/WoodCTA"
import Footer from "../components/Footer";

export const DigitalMarketingWood = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full min-h-screen relative">
   <Navbar />
<DigitalWoodHero />
<ServicesSection />
<Marble1CTA />
<Footer />

    </div>
  );
};
