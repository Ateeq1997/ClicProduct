"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { PlayCircle } from "lucide-react";

const CollaborateClients = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-[128px] flex flex-col items-center">
      {/* Large Image with Play Icon */}
      <div className="relative w-full max-w-[1000px] h-[560px] mb-[100px] flex items-center justify-center">
        <img
          src="figmaAssets/d2.png"
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="w-[100px] h-[100px] text-white opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center leading-[normal] mb-[72px]">
        {t("collaborateClients1.heading")}
      </h2>

      {/* Paragraph */}
      <p className="w-[882px] max-w-full [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] text-center leading-[30.8px] mb-[125px]">
        {t("collaborateClients1.paragraph1")}
      </p>

      {/* 4 Images - 2 in each row */}
      <div className="flex flex-col items-center gap-[51px]">
        {/* Row 1 */}
        <div className="flex gap-[51px] justify-center">
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Preview 1"
            src="figmaAssets/s1.png"
          />
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Preview 2"
            src="figmaAssets/s2.png"
          />
        </div>

        {/* Row 2 */}
        <div className="flex gap-[51px] justify-center">
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Preview 3"
            src="figmaAssets/s3.png"
          />
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Preview 4"
            src="figmaAssets/s4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborateClients;
