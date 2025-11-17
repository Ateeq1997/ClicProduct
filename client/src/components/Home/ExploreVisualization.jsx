"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ExploreVisualization = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[92px] py-16 mt-[250px]">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-4xl md:text-5xl lg:text-5xl text-center leading-tight mb-12">
        {t("explore_heading")}
      </h2>

      {/* Images container */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 items-center sm:items-end">
        {/* Left Image */}
        <motion.img
          src="/figmaAssets/Mask Group (2).png"
          alt={t("visualization_alt1")}
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto sm:h-[472px] object-cover rounded-tl-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Middle Image */}
        <motion.img
          src="/figmaAssets/Mask Group (1).png"
          alt={t("visualization_alt2")}
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto sm:h-[472px] relative -top-4 sm:-top-8 rounded-[20px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Right Image */}
        <motion.img
          src="/figmaAssets/Mask Group.png"
          alt={t("visualization_alt3")}
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto sm:h-[472px] object-cover rounded-br-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default ExploreVisualization;
