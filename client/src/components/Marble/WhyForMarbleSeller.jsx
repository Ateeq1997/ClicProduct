"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const WhyForMarbleSellers = () => {
  const { t } = useTranslation();

  const features = t("whyMarbleSellers.features", { returnObjects: true });

  return (
    <section
      className="
        w-full max-w-[1440px] mx-auto 
        px-6 sm:px-10 md:px-[92px] 
        py-14 sm:py-16 md:py-20
      "
    >
      {/* Heading */}
      <h2
        className="
          [font-family:'Poppins',Helvetica] font-bold text-[#111111] 
          text-[32px] sm:text-[48px] md:text-[68px] 
          text-center 
          tracking-[0] 
          leading-[38px] sm:leading-[55px] md:leading-[75.5px] 
          mb-8 sm:mb-12 md:mb-16
        "
      >
        {t("whyMarbleSellers.heading")}
      </h2>

      {/* Features Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-6 sm:gap-8 md:gap-10 
          mb-8 sm:mb-10 md:mb-12
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-5 sm:gap-6 md:gap-7 
              group 
              transition-all duration-500
            "
          >
            {/* Image */}
            <img
              className="
                w-full 
                h-[180px] sm:h-[200px] md:h-[223px] 
                rounded-md object-cover 
                transform transition-transform duration-500 
                group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl
              "
              alt={feature.alt}
              src={`/figmaAssets/${index + 1}.jpg`}
            />

            {/* Text */}
            <p
              className="
                [font-family:'Poppins',Helvetica] font-medium text-neutral-800 
                text-base sm:text-lg md:text-xl 
                tracking-[0] 
                leading-[22px] sm:leading-[24px] md:leading-[24.8px]
              "
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyForMarbleSellers;
