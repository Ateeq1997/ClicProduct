import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Hero from "../components/RenovationContractors/Hero"
import VisualizeRealismSection from "../components/RenovationContractors/VisualizeRealismSection";
import SimplifyProjectSection from "../components/RenovationContractors/SimplifyProjectSection";
import RenovationCTA from "../components/RenovationContractors/RenovationCTA"
import Footer from "../components/Footer";

const features = [
  "Real-time product previews",
  "Side-by-side comparisons",
  "Instant client approval visuals",
];

export const Renovation = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
   <Navbar />
   <Hero />
    <VisualizeRealismSection />
    <SimplifyProjectSection />
<RenovationCTA />
<Footer />

    </div>
  );
};
