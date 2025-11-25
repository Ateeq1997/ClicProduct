"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { PlayCircle } from "lucide-react";

const CollaborateClients = () => {
  const { t } = useTranslation();

  return (
    <section
      className="
        max-w-[1440px] mx-auto 
        px-5 sm:px-10 md:px-[92px] 
        py-[60px] md:py-[128px] 
        flex flex-col items-center
      "
    >
      {/* ========= LARGE VIDEO IMAGE ========= */}
      <div
        className="
          relative w-full max-w-[1000px] 
          h-[220px] sm:h-[350px] md:h-[560px] 
          mb-[50px] md:mb-[100px] 
          flex items-center justify-center
        "
      >
        <img
          src="figmaAssets/d2.png"
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle
            className="
              w-[55px] h-[55px] 
              sm:w-[75px] sm:h-[75px] 
              md:w-[100px] md:h-[100px] 
              text-white opacity-90 hover:opacity-100 
              transition-all duration-300 cursor-pointer 
              drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]
            "
          />
        </div>
      </div>

      {/* ========= HEADING ========= */}
      <h2
        className="
          [font-family:'Poppins',Helvetica] font-bold text-[#333333] 
          text-[28px] sm:text-[36px] md:text-5xl 
          text-center leading-[36px] sm:leading-[44px] md:leading-[normal] 
          mb-[40px] md:mb-[72px]
        "
      >
        {t("collaborateClients1.heading")}
      </h2>

      {/* ========= PARAGRAPH ========= */}
      <p
        className="
          w-full max-w-[882px] 
          [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] 
          text-[16px] sm:text-[18px] md:text-[22px] 
          text-center leading-[24px] sm:leading-[28px] md:leading-[30.8px] 
          mb-[60px] md:mb-[125px]
        "
      >
        {t("collaborateClients1.paragraph1")}
      </p>

      {/* ========= IMAGE GRID ========= */}
      <div className="flex flex-col items-center gap-[30px] md:gap-[51px]">

        {/* Row 1 */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 
            gap-[20px] sm:gap-[30px] md:gap-[51px]
            w-full justify-center
          "
        >
          <img
            className="
              w-full max-w-[471px] 
              h-[200px] sm:h-[280px] md:h-[360px] 
              object-cover rounded-md mx-auto
            "
            alt="Preview 1"
            src="figmaAssets/w4.jpg"
          />

          <img
            className="
              w-full max-w-[471px] 
              h-[200px] sm:h-[280px] md:h-[360px] 
              object-cover rounded-md mx-auto
            "
            alt="Preview 2"
            src="figmaAssets/w3.jpg"
          />
        </div>

        {/* Row 2 */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 
            gap-[20px] sm:gap-[30px] md:gap-[51px]
            w-full justify-center
          "
        >
          <img
            className="
              w-full max-w-[471px] 
              h-[200px] sm:h-[280px] md:h-[360px] 
              object-cover rounded-md mx-auto
            "
            alt="Preview 3"
            src="figmaAssets/w5.jpg"
          />

          <img
            className="
              w-full max-w-[471px] 
              h-[200px] sm:h-[280px] md:h-[360px] 
              object-cover rounded-md mx-auto
            "
            alt="Preview 4"
            src="figmaAssets/s4.png"
          />
        </div>

      </div>
    </section>
  );
};

export default CollaborateClients;
