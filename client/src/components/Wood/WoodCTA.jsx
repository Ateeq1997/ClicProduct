"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const WoodCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
      <div className="flex flex-col items-center gap-[21px] bg-[#1b1b1b] rounded-2xl overflow-hidden border border-solid border-[#4c4c4c] py-[45px] px-12">
        {/* Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[45px] text-center tracking-[0] leading-[normal] max-w-[899px]">
          {t("WoodCTA.heading")}
        </h2>

        {/* Button with hover animation and white text */}
        <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-white hover:bg-[#111111]">
          {t("WoodCTA.button")}
        </Button>
      </div>
    </section>
  );
};

export default WoodCTA;
