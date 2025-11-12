import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import WebHero from "../components/WebDevelopment/WebHero"
import MarbleWebsiteSection from "../components/WebDevelopment/MarbleWebsiteSection"
import DigitalShowroom from "../components/WebDevelopment/DigitalShowroom"
import WebCTA from "../components/WebDevelopment/WebCTA"
import Footer from "../components/Footer";

export const WebDevelopment = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] min-h-[3335px] relative">

<Navbar />
<WebHero />
<MarbleWebsiteSection />
<DigitalShowroom />      
<WebCTA />
<Footer />
    </div>
  );
};
