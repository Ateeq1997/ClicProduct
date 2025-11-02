"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ Import translation hook

const ExploreVisualization = () => {
  const { t } = useTranslation(); // ✅ Use translation

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16 mt-[250px]">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[0] leading-[normal] mb-12">
        {t("explore_heading")}
      </h2>

      {/* ✅ Animated 3 Images with specific rounded corners */}
      <div className="flex justify-center gap-8 items-end">
        {/* Left Image - Top Left Rounded */}
        <motion.img
          src="/figmaAssets/Mask Group (2).png"
          alt={t("visualization_alt1")}
          className="w-[360px] h-[472px] object-cover rounded-tl-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Middle Image - Slightly Up */}
        <motion.img
          src="/figmaAssets/Mask Group (1).png"
          alt={t("visualization_alt2")}
          className="w-[360px] h-[472px] object-cover relative -top-8 rounded-[20px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Right Image - Bottom Right Rounded */}
        <motion.img
          src="/figmaAssets/Mask Group.png"
          alt={t("visualization_alt3")}
          className="w-[360px] h-[472px] object-cover rounded-br-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default ExploreVisualization;
