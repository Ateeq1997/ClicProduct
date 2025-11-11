"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VisualizeRealismSection = () => {
  const { t } = useTranslation();
  const bulletPoints = t("visualizeRealism1.bulletPoints", { returnObjects: true });

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-[90px]">
      <div className="flex items-start gap-[30px] flex-wrap">
        {/* ===== Left Side Text ===== */}
        <div className="flex-1 min-w-[600px]">
          {/* ===== Heading ===== */}
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] whitespace-nowrap mb-[60px]">
            {t("visualizeRealism1.heading")}
          </h2>

          {/* ===== Description ===== */}
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px] mb-[60px]">
            {t("visualizeRealism1.description")}
          </p>

          {/* ===== Bullet Points ===== */}
          <ul className="space-y-[22px] -mt-[20px]">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-[18px]">
                <div className="w-[16px] h-[16px] rounded-full border-[4px] border-solid border-black flex-shrink-0 mt-[6px]" />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[21px] leading-[28px]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right Side Images with Hover Animation ===== */}
        <div className="relative w-[305px] h-[480px] flex-shrink-0 mr-24">
          {/* Back Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-[80px] left-0 w-[305px] h-[400px] bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              alt="Design example 1"
              src="figmaAssets/image 100 (1).png"
            />
          </motion.div>

          {/* Front Image */}
          <motion.img
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-0 left-[143px] w-[305px] h-[400px] object-cover rounded-md shadow-lg"
            alt="Design example 2"
            src="figmaAssets/Frame 41 (2).png"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualizeRealismSection;
