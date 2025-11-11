"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseSection = () => {
  const { t } = useTranslation();

  const featureCards = [
    {
      image: "/figmaAssets/a1.png",
      title: t("whyChoose.features.0.title"),
      description: t("whyChoose.features.0.description"),
    },
    {
      image: "/figmaAssets/a2.png",
      title: t("whyChoose.features.1.title"),
      description: t("whyChoose.features.1.description"),
    },
    {
      image: "/figmaAssets/a3.png",
      title: t("whyChoose.features.2.title"),
      description: t("whyChoose.features.2.description"),
    },
    {
      image: "/figmaAssets/a4.png",
      title: t("whyChoose.features.3.title"),
      description: t("whyChoose.features.3.description"),
    },
    {
      image: "/figmaAssets/a5.png",
      title: t("whyChoose.features.4.title"),
      description: t("whyChoose.features.4.description"),
    },
    {
      image: "/figmaAssets/a6.png",
      title: t("whyChoose.features.5.title"),
      description: t("whyChoose.features.5.description"),
    },
  ];

  return (
    <section className="relative w-full pt-[70px] pb-[113px] bg-[#fcfcfc]">
      {/* Heading */}
      <h2 className="w-[749px] mx-auto [font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px]">
        {t("whyChoose.heading")}
      </h2>

      {/* Description */}
      <p className="w-[793px] mx-auto mt-[40px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] text-center leading-[30.8px]">
        {t("whyChoose.description")}
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-[90%] max-w-[1200px] mx-auto mt-[80px]">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="bg-white rounded-xl border border-solid border-[#00000012] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <CardContent className="flex flex-col p-6">
              <img
                className="w-full h-[180px] object-cover rounded-lg"
                alt={card.title}
                src={card.image}
              />

              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#18191b] text-[22px] text-left mt-6">
                {card.title}
              </h3>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[16px] text-left mt-3 leading-[24px] whitespace-pre-line">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
