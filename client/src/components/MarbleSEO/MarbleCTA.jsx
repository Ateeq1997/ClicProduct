"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const MarbleCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[92px] py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-[21px] bg-[#1b1b1b] rounded-2xl overflow-hidden border border-solid border-[#4c4c4c] py-10 sm:py-12 md:py-[45px] px-6 sm:px-8 md:px-12">
        {/* Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-[45px] text-center tracking-[0] leading-snug sm:leading-normal md:leading-[normal] max-w-full sm:max-w-[700px] md:max-w-[899px]">
          {t("MarbleCTA.heading")}
        </h2>

        {/* Button with hover animation and white text */}
        <Button className="h-auto px-6 sm:px-8 md:px-8 py-3 sm:py-[12px] md:py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-base sm:text-lg md:text-[22px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-white hover:bg-[#111111]">
          {t("MarbleCTA.button")}
        </Button>
      </div>
    </section>
  );
};

export default MarbleCTA;
