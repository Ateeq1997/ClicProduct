import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import SeoHero from "../components/MarbleSEO/SeoHero"
import Keyword from "../components/MarbleSEO/Keyword"
import CollaborateClients from "../components/MarbleSEO/CollaborateClients"
import MarbleCTA from "../components/MarbleSEO/MarbleCTA"
import Footer from "../components/Footer";

export const MarbleSEO = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
    <Navbar />
<SeoHero />
<CollaborateClients />
<Keyword />

<MarbleCTA />
<Footer />
    </div>
  );
};
