"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

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
    <section
      className="
        max-w-[1440px] mx-auto 
        px-5 sm:px-10 md:px-[92px] lg:px-[221px] 
        py-14 sm:py-16 md:py-20
      "
    >
      <div className="flex flex-col gap-14 sm:gap-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`
              flex flex-col md:flex-row items-start 
              gap-8 sm:gap-10 
              ${service.imagePosition === "right" ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* === IMAGE === */}
            <div className="flex-shrink-0 w-full md:w-[461px]">
              <img
                className="
                  w-full 
                  h-[220px] sm:h-[250px] md:h-[202px] 
                  rounded-lg object-cover shadow-md
                "
                alt={service.title}
                src={service.image}
              />
            </div>

            {/* === TEXT === */}
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-xl sm:text-2xl tracking-[0.24px] leading-[33.6px]">
                {service.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-lg tracking-[0] leading-[25.2px] whitespace-pre-line">
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
