import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import ClicHero from "../components/ClicProduct/ClicHero"
import WhyChooseSection from "../components/ClicProduct/WhyChooseSection"
import GrowSmarter from "../components/ClicProduct/GrowSmarter";
import ClicCTA from "../components/ClicProduct/ClicCTA"
import Footer from "../components/Footer";


export const ClicproductSoftware = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
   <Navbar />
<ClicHero />
     <WhyChooseSection />
     <GrowSmarter />
<ClicCTA />
<Footer />

    </div>
  );
};
