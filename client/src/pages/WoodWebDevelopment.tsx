import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import WebHero from "../components/WoodWebDevelopment/WebHero"
import MarbleWebsiteSection from "../components/WoodWebDevelopment/MarbleWebsiteSection"
import DigitalShowroom from "../components/WoodWebDevelopment/DigitalShowroom"
import WoodCTA from "../components/WoodSEO/WoodCTA"
import Footer from "../components/Footer";

export const WoodWebDevelopment = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] min-h-[3335px] relative">

<Navbar />
<WebHero />
<MarbleWebsiteSection />
<DigitalShowroom />      
<WoodCTA />
<Footer />
    </div>
  );
};
