"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactHero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative h-[641px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/figmaAssets/Mask Group (11).jpg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div
          className="relative w-[917px] rounded-[30px] border-none backdrop-blur-[22.85px] backdrop-brightness-[100%]
            [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)]
            bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)]
            before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px]
            before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)]
            before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
            before:z-[1] before:pointer-events-none p-12"
        >
          {/* Heading */}
          <h1 className="[-webkit-text-stroke:2px_#a38062] [font-family:'Poppins',Helvetica] font-bold text-white text-[85px] text-center tracking-[0] leading-[94.4px] mb-6">
            {t("contacthero.heading")}
          </h1>

          {/* Paragraph */}
          {/* <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[28.8px] max-w-[728px] mx-auto mb-6">
            {t("hero1.paragraph")}
          </p> */}

          {/* Button */}
          {/* <div className="flex justify-center gap-3">
           <motion.div
  whileHover={{
    scale: 1.05,
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="rounded-[200px] inline-block"
>
  <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] transition-all duration-300">
    {t("hero1.button")}
  </Button>
</motion.div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
