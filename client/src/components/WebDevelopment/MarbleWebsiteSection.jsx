"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MarbleWebsiteSection = () => {
  const { t } = useTranslation();
  const bulletPoints = t("visualizeRealism2.bulletPoints", { returnObjects: true });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[92px] py-[60px]">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[30px]">
        {/* ===== Left Side Text ===== */}
        <div className="flex-1 min-w-full lg:min-w-[600px]">
          {/* Heading */}
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[42px] sm:text-[52px] leading-[60px] sm:leading-[72.8px] mb-6 sm:mb-[60px]">
            {t("visualizeRealism2.heading")}
          </h2>

          {/* Description */}
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30.8px] mb-6 sm:mb-[60px]">
            {t("visualizeRealism2.description")}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 sm:space-y-[22px] -mt-[10px] sm:-mt-[20px]">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 sm:gap-[18px]">
                <div className="w-3.5 h-3.5 sm:w-[16px] sm:h-[16px] rounded-full border-[2px] sm:border-[4px] border-black flex-shrink-0 mt-1 sm:mt-[6px]" />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[16px] sm:text-[21px] leading-[22px] sm:leading-[28px]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right Side Images ===== */}
        <div className="relative w-full sm:w-[305px] h-[300px] sm:h-[400px] flex-shrink-0 mt-8 lg:mt-0 mx-auto lg:mx-10">
          {/* Back Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-[60px] sm:top-[40px] sm:left-4 lg:top-[80px] lg:left-0 w-[280px] sm:w-[260px] lg:w-[305px] h-[350px] sm:h-[300px] lg:h-[400px] bg-white rounded-md shadow-md overflow-hidden"
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
            className="absolute top-0 sm:top-0 left-[80px] sm:left-[100px] lg:left-[143px] w-[280px] sm:w-[305px] lg:w-[305px] h-[350px] sm:h-[380px] lg:h-[400px] object-cover rounded-md shadow-lg"
            alt="Design example 2"
            src="figmaAssets/Frame 41 (1).png"
          />
        </div>
      </div>
    </section>
  );
};

export default MarbleWebsiteSection;
