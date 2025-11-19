"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const BuildForMarble = () => {
  const { t } = useTranslation();
  const features = t("buildForMarble.features", { returnObjects: true });

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-[60px] lg:px-[92px]">
      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-center tracking-[0.52px] leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[72.8px] max-w-full sm:max-w-[750px] md:max-w-[950px] mx-auto">
        {t("buildForMarble.heading")}
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[50px] mt-12 justify-center">
        {/* ===== Images Section ===== */}
        <div className="flex w-full sm:w-[500px] md:w-[600px] lg:w-[650px] h-[300px] sm:h-[360px] md:h-[400px] lg:h-[440px] gap-2 group justify-center relative">
          {/* Left image (Frame 42) */}
          <img
            src="/figmaAssets/Frame 42.png"
            alt="Frame 42"
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[421px] object-cover rounded-md
                       lg:absolute lg:left-0 top-0 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl"
          />

          {/* Right image (Frame 41) */}
          <img
            src="/figmaAssets/Frame 41.png"
            alt="Frame 41"
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[421px] object-cover rounded-md
                       lg:absolute lg:right-[20px] bottom-[-20px] transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl"
          />
        </div>

        {/* ===== Right Text Section ===== */}
        <div className="flex-1 pt-6 sm:pt-8 lg:pt-[40px] ml-0 lg:ml-[-40px] text-center lg:text-left">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-[0.26px] leading-[28px] sm:leading-[32px] md:leading-[34px] lg:leading-[36.4px] mb-6 sm:mb-8 lg:mb-[40px] max-w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[520px] mx-auto lg:mx-0">
            {t("buildForMarble.subheading.line1")}
            <br className="hidden md:block" />
            {t("buildForMarble.subheading.line2")}
          </h3>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 sm:gap-4">
                {/* Small black ring with white center */}
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-black flex items-center justify-center mt-1">
                  <span className="w-[6px] sm:w-1.5 h-[6px] sm:h-1.5 rounded-full bg-white" />
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] max-w-full sm:max-w-[500px] md:max-w-[550px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BuildForMarble;
