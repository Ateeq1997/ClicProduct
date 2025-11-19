"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VisualizeRealismSection = () => {
  const { t } = useTranslation();
  const bulletPoints = t("visualizeRealism1.bulletPoints", { returnObjects: true });

  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[92px] py-[90px]">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[30px]">
        {/* ===== Left Side Text ===== */}
        <div className="flex-1 min-w-[300px] lg:min-w-[600px]">
          {/* Heading */}
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[40px] sm:text-[48px] lg:text-[52px] tracking-[0.52px] leading-[1.4] mb-8 lg:mb-[60px]">
            {t("visualizeRealism1.heading")}
          </h2>

          {/* Description */}
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.5] mb-8 lg:mb-[60px]">
            {t("visualizeRealism1.description")}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 sm:gap-6">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-black flex-shrink-0 mt-1" />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[16px] sm:text-[18px] lg:text-[21px] leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right Side Images ===== */}
        <div className="relative w-full max-w-[305px] h-[480px] flex-shrink-0 mx-auto lg:mx-10 lg:mt-0">
          {/* Back Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-20 left-0 w-[305px] h-[400px] bg-white rounded-md shadow-md overflow-hidden"
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
            className="absolute top-0 left-[50%] transform -translate-x-1/2 lg:left-[143px] w-[305px] h-[400px] object-cover rounded-md shadow-lg"
            alt="Design example 2"
            src="figmaAssets/Frame 41 (2).png"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualizeRealismSection;
