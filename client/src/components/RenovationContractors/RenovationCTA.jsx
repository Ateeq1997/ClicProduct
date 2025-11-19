"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const RenovationCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[92px] py-16 sm:py-20">
      <div className="flex flex-col items-center gap-6 sm:gap-[21px] bg-[#1b1b1b] rounded-2xl overflow-hidden border border-solid border-[#4c4c4c] py-12 sm:py-[45px] px-6 sm:px-12">
        {/* Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[40px] md:text-[45px] text-center tracking-[0] leading-[1.1] max-w-full sm:max-w-[899px]">
          {t("RenovationCTA.heading")}
        </h2>

        {/* Button with hover animation */}
        <Button className="h-auto px-6 sm:px-8 py-[12px] sm:py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[20px] sm:text-[22px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-white hover:bg-[#111111]">
          {t("RenovationCTA.button")}
        </Button>
      </div>
    </section>
  );
};

export default RenovationCTA;
