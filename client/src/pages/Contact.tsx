import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import ContactHero from "../components/Contact/ContactHero"
import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/Footer";

export const Contact = (): JSX.Element => {
  return (
   <div className="bg-[#fcfcfc] overflow-hidden w-full relative">
     
<Navbar />
<ContactHero />
<ContactForm />
   <Footer /> 

    </div>
  );
};
