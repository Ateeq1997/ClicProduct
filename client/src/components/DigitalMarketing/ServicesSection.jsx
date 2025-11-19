"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("service1_title"),
      description: t("service1_description"),
      image: "/figmaAssets/d1.jpg",
      imagePosition: "left",
    },
    {
      id: 2,
      title: t("service2_title"),
      description: t("service2_description"),
      image: "/figmaAssets/d2.jpg",
      imagePosition: "right",
    },
    {
      id: 3,
      title: t("service3_title"),
      description: t("service3_description"),
      image: "/figmaAssets/d3.jpg",
      imagePosition: "left",
    },
    {
      id: 4,
      title: t("service4_title"),
      description: t("service4_description"),
      image: "/figmaAssets/d4.jpg",
      imagePosition: "right",
    },
    {
      id: 5,
      title: t("service5_title"),
      description: t("service5_description"),
      image: "/figmaAssets/d5.jpg",
      imagePosition: "left",
    },
    {
      id: 6,
      title: t("service6_title"),
      description: t("service6_description"),
      image: "/figmaAssets/d6.jpg",
      imagePosition: "right",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[221px] py-20">
      <div className="flex flex-col gap-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
              service.imagePosition === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-[461px]">
              <img
                className="w-full h-[250px] sm:h-[280px] md:h-[202px] lg:h-[250px] rounded-lg object-cover shadow-md"
                alt={service.title}
                src={service.image}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-xl sm:text-2xl md:text-2xl tracking-[0.24px] leading-[28px] sm:leading-[33.6px]">
                {service.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-lg md:text-lg tracking-[0] leading-[24px] sm:leading-[25.2px] whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
