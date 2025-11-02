"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const CollaborateSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-[128px]">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center leading-[normal] mb-[72px]">
          {t("collaborateSection.heading")}
        </h2>

        {/* Paragraph */}
        <p className="w-[882px] max-w-full [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] text-center leading-[30.8px] mb-[125px]">
          {t("collaborateSection.paragraph1")}
          <br />
          {t("collaborateSection.paragraph2")}
        </p>

        {/* Two Images Side by Side */}
        <div className="flex flex-col sm:flex-row gap-[51px] items-center justify-center">
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Collaboration preview"
            src="figmaAssets/Image.png"
          />
          <img
            className="w-[471px] h-[360px] object-cover rounded-md"
            alt="Collaboration preview"
            src="figmaAssets/image 15.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
