"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const WhyForWoodSellers = () => {
  const { t } = useTranslation();

  const features = t("whyWoodSellers.features", { returnObjects: true });

  return (
    <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[68px] text-center tracking-[0] leading-[75.5px] mb-16">
        {t("whyWoodSellers.heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-7 group transition-all duration-500"
          >
            <img
              className="w-full h-[223px] rounded-md object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl"
              alt={feature.alt}
              src={`/figmaAssets/${index + 4}.jpg`} 
            />
            <p className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl tracking-[0] leading-[24.8px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyForWoodSellers;
