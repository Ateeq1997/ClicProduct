"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { PlayCircle } from "lucide-react";

const CollaborateClients = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[92px] py-16 sm:py-20 md:py-[128px] flex flex-col items-center">
      {/* Large Image with Play Icon in Center */}
      <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[560px] mb-16 sm:mb-24 md:mb-[100px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="figmaAssets/d2.png"
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] text-white opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-3xl sm:text-4xl md:text-5xl text-center leading-snug mb-12 sm:mb-16 md:mb-[72px]">
        {t("collaborateClients.heading")}
      </h2>

      {/* Paragraph */}
      <p className="w-full max-w-[882px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-lg md:text-[22px] text-center leading-7 sm:leading-8 md:leading-[30.8px] mb-12 sm:mb-16 md:mb-[125px]">
        {t("collaborateClients.paragraph1")}
      </p>

      {/* Two Images Side by Side */}
     <div className="flex flex-col sm:flex-row gap-6 sm:gap-[51px] items-center justify-center w-full">

  {/* Image 1 */}
  <div className="w-full max-w-[480px] h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      alt="Collaboration preview 1"
      src="figmaAssets/m3.jpg"
    />
  </div>

  {/* Image 2 */}
  <div className="w-full max-w-[480px] h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      alt="Collaboration preview 2"
      src="figmaAssets/image 15 (2).png"
    />
  </div>

</div>


    </section>
  );
};

export default CollaborateClients;
