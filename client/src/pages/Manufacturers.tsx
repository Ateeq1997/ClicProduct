import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import ManufacturerHero from "../components/MarbleManufacturers/ManufacturerHero"
import BuildForMarble from "../components/MarbleManufacturers/BuiltforMarble"
import VisualizerSection from "../components/MarbleManufacturers/VisualizerSection"
import VideoSection from "../components/MarbleManufacturers/VideoSection"
import ManufacturerCTA from "../components/MarbleManufacturers/MAnufacturerCTA"
import Footer from "../components/Footer";


const Manufacturers = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
 <Navbar />
<ManufacturerHero />
<BuildForMarble />
<VisualizerSection />
<VideoSection />
<ManufacturerCTA />
<Footer />
    </div>
  );
};
export default Manufacturers;