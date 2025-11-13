import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import SeoHero from "../components/WoodSEO/SeoHero"
import Keyword from "../components/WoodSEO/Keyword"
import CollaborateClients from "../components/WoodSEO/CollaborateClients"
import WoodCTA from "../components/WoodSEO/WoodCTA"
import Footer from "../components/Footer";

export const WoodSEO = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
    <Navbar />
<SeoHero />
<CollaborateClients />
<Keyword />

<WoodCTA />
<Footer />
    </div>
  );
};
