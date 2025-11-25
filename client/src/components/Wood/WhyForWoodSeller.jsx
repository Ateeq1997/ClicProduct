"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const WhyForWoodSellers = () => {
  const { t } = useTranslation();

  const features = t("whyWoodSellers.features", { returnObjects: true });

  return (
    <section
      className="
        w-full max-w-[1440px] mx-auto px-[92px] py-20
        /* MOBILE PADDING FIX */
        sm:px-6 px-4
      "
    >
   {/* Heading */}
<h2
  className="
    [font-family:'Poppins',Helvetica] font-bold text-[#111111]
    text-center tracking-[0] mb-16

    /* Mobile (default) */
    text-[32px] leading-[38px]

    /* Small screens */
    sm:text-[40px] sm:leading-[46px]

    /* Tablet */
    md:text-[52px] md:leading-[60px]

    /* Large screens */
    lg:text-[68px] lg:leading-[75px]
  "
>
  {t("whyWoodSellers.heading")}
</h2>


      {/* Features Grid */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-10 mb-12

          /* MOBILE: add more space between items */
          sm:gap-8 gap-6
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-7 group transition-all duration-500
              /* MOBILE */
              sm:gap-5 gap-4
            "
          >
            <img
              className="
                w-full h-[223px] rounded-md object-cover
                transform transition-transform duration-500
                group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl

                /* Tablet */
                md:h-[200px]

                /* Mobile */
                sm:h-[180px] h-[150px]
              "
              alt={feature.alt}
              src={`/figmaAssets/${index + 4}.jpg`}
            />

            <p
              className="
                [font-family:'Poppins',Helvetica] font-medium text-neutral-800 
                text-xl tracking-[0] leading-[24.8px]

                /* Tablet */
                md:text-lg

                /* Mobile */
                sm:text-base text-sm
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

export default WhyForWoodSellers;
