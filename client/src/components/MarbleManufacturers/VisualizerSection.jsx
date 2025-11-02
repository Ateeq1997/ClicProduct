"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const VisualizerSection = () => {
  const { t } = useTranslation();
  const visualizerFeatures = t("visualizer.features", { returnObjects: true });

  return (
    <section className="relative w-full h-[580px] bg-[#a3806214] backdrop-blur-[2px] flex flex-col items-center justify-center">
      {/* ===== Heading ===== */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px] mb-[9px] max-w-[900px]">
        {t("visualizer.heading")}
      </h2>

      {/* ===== Description ===== */}
      <p className="w-[967px] [font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl text-center tracking-[0] leading-[28px] mb-[67px]">
        {t("visualizer.description.line1")}
        <br />
        {t("visualizer.description.line2")}
      </p>

      {/* ===== Features Section ===== */}
      <div className="flex flex-col gap-[30px] items-start">
        {visualizerFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-[25px]">
            {/* Square with icon */}
            <div className="relative w-[56px] h-[56px] bg-[#BA9E76] rounded-md overflow-visible">
              <img
                src={feature.icon}
                alt="Feature Icon"
                className="absolute w-[55px] h-[55px] bottom-[-10px] left-[-16px] object-contain"
              />
            </div>

            {/* Text */}
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] leading-[30.8px] tracking-[0] max-w-[600px]">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualizerSection;
