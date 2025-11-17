"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[641px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/figmaAssets/Mask Group (11).jpg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-10">
        <div
          className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-[917px] rounded-[30px] border-none backdrop-blur-[22.85px] backdrop-brightness-[100%]
            [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)]
            bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)]
            before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px]
            before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)]
            before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
            before:z-[1] before:pointer-events-none p-6 sm:p-8 md:p-12"
        >
          {/* Heading */}
          <h1 className="[-webkit-text-stroke:1px_#a38062] sm:[-webkit-text-stroke:1.5px_#a38062] md:[-webkit-text-stroke:2px_#a38062] 
            [font-family:'Poppins',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-[85px] text-center leading-tight sm:leading-tight md:leading-[94.4px] mb-4 sm:mb-6">
            {t("contacthero.heading")}
          </h1>

          {/* Optional Paragraph */}
          {/* <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-base sm:text-xl md:text-2xl text-center leading-snug sm:leading-normal md:leading-[28.8px] mb-4 sm:mb-6 max-w-full md:max-w-[728px] mx-auto">
            {t("hero1.paragraph")}
          </p> */}

          {/* Optional Button */}
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
              <Button className="h-auto px-6 sm:px-8 py-3 sm:py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-lg sm:text-[22px] tracking-[0] leading-[normal] transition-all duration-300">
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
