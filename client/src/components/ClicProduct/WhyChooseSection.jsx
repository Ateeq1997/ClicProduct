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
      <h2 className="w-full max-w-[750px] mx-auto font-poppins font-bold text-[#333333] text-[36px] sm:text-[42px] md:text-[52px] text-center tracking-[0.52px] leading-[1.3]">
        {t("whyChoose.heading")}
      </h2>

      {/* Description */}
      <p className="w-full max-w-[800px] mx-auto mt-[24px] sm:mt-[40px] font-poppins font-normal text-[#4b4b4b] text-[18px] sm:text-[20px] md:text-[22px] text-center leading-[1.4]">
        {t("whyChoose.description")}
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] w-[90%] max-w-[1200px] mx-auto mt-[50px] sm:mt-[80px]">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="bg-white rounded-xl border border-solid border-[#00000012] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <CardContent className="flex flex-col p-4 sm:p-6">
              <img
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-lg"
                alt={card.title}
                src={card.image}
              />

              <h3 className="font-poppins font-bold text-[#18191b] text-[20px] sm:text-[22px] mt-4 sm:mt-6">
                {card.title}
              </h3>

              <p className="font-poppins font-normal text-[#4b4b4b] text-[14px] sm:text-[16px] mt-2 sm:mt-3 leading-[22px] sm:leading-[24px] whitespace-pre-line">
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
