import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import ArchitechHero from "../components/Architecture/ArchitechHero"
import VisualizeRealismSection from "../components/Architecture/VisualizeRealismSection"
import SimplifyProjectSection from "../components/Architecture/SimplifyProjectSection"
import CollaborateSection from "../components/Architecture/CollaborateSection"
import ArchitechCTA from "../components/Architecture/ArchitechCTA"
import Footer from "../components/Footer";

export const Architects = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
    <Navbar />
<ArchitechHero />
<VisualizeRealismSection />
<SimplifyProjectSection />
<CollaborateSection />
<ArchitechCTA />
<Footer />
    </div>
  );
};
