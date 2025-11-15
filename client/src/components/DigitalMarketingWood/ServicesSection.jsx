"use client";

import React from "react";
import { useTranslation } from "react-i18next"; // ✅ old i18n.js method

const ServicesSection = () => {
  const { t } = useTranslation(); // ✅ enable translations

  const services = [
    {
      id: 1,
      title: t("service7_title"),
      description: t("service7_description"),
      image: "/figmaAssets/d7.jpg",
      imagePosition: "left",
    },
    {
      id: 2,
      title: t("service8_title"),
      description: t("service8_description"),
      image: "/figmaAssets/d8.jpg",
      imagePosition: "right",
    },
    {
      id: 3,
      title: t("service9_title"),
      description: t("service9_description"),
      image: "/figmaAssets/d9.jpg",
      imagePosition: "left",
    },
    {
      id: 4,
      title: t("service10_title"),
      description: t("service10_description"),
      image: "/figmaAssets/d10.jpg",
      imagePosition: "right",
    },
    {
      id: 5,
      title: t("service10_title"),
      description: t("service10_description"),
      image: "/figmaAssets/d11.jpg",
      imagePosition: "left",
    },
  
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] md:px-[221px] py-20">
      <div className="flex flex-col gap-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-start gap-10 ${
              service.imagePosition === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-[461px]">
              <img
                className="w-full h-[250px] md:h-[202px] rounded-lg object-cover shadow-md"
                alt={service.title}
                src={service.image}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-2xl tracking-[0.24px] leading-[33.6px]">
                {service.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-lg tracking-[0] leading-[25.2px] whitespace-pre-line">
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
