"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const BuildForMarble = () => {
  const { t } = useTranslation();
  const features = t("buildForMarble.features", { returnObjects: true });

  return (
    <section className="relative w-full py-[92px] px-[92px]">
      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px] ml-[270px] max-w-[950px]">
        {t("buildForMarble.heading")}
      </h2>

      <div className="flex items-start gap-[50px] justify-center">
        {/* ===== Left Images Section ===== */}
        <div className="relative flex w-[650px] h-[440px] group">
          {/* Left image (Frame 42) */}
          <img
            src="/figmaAssets/Frame 42.png"
            alt="Frame 42"
            className="w-[305px] h-[421px] object-cover rounded-md absolute left-0 -top-[60px]
                       transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl"
          />

          {/* Right image (Frame 41) moved slightly left */}
          <img
            src="/figmaAssets/Frame 41.png"
            alt="Frame 41"
            className="w-[305px] h-[421px] object-cover rounded-md absolute right-[20px] bottom-0
                       transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-xl"
          />
        </div>

        {/* ===== Right Text Section ===== */}
        <div className="flex-1 pt-[40px] ml-[-40px]">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-[26px] tracking-[0.26px] leading-[36.4px] mb-[40px] max-w-[520px]">
            {t("buildForMarble.subheading.line1")}
            <br className="hidden md:block" />
            {t("buildForMarble.subheading.line2")}
          </h3>

          <ul className="flex flex-col gap-[20px]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-[16px]">
                {/* Small black ring with white center */}
                <span className="w-[16px] h-[16px] rounded-full border-4 border-black flex items-center justify-center mt-1.5">
                  <span className="w-[7px] h-[7px] rounded-full bg-white" />
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[20px] leading-[28px] max-w-[550px]">
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
