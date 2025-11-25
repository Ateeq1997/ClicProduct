"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CustomerJourneySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-16 gap-10">
      {/* ===== Left Text Content ===== */}
      <div className="flex flex-col items-start max-w-full lg:max-w-[600px] text-left">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[32px] sm:text-[38px] lg:text-[52px] leading-[40px] sm:leading-[48px] lg:leading-[54px] mb-6">
          {t("customerJourney.title")}
        </h2>

        <p className="[font-family:'Poppins',Helvetica] text-[#4b4b4b] text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[30px] mb-8">
          {t("customerJourney.description")}
        </p>

        {/* ===== Animated Button ===== */}
        {/* ===== Animated Button ===== */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[200px] mt-4"
                >
                  <Button className="h-auto px-6 sm:px-8 py-[10px] sm:py-[12px] bg-white rounded-[200px] border border-solid border-[#00000061] font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#111111] transition-all duration-500 hover:bg-[#000000] hover:text-white">
                    {t("hero6.button")}
                  </Button>
                </motion.div>
      </div>

      {/* ===== Animated Image ===== */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-full lg:w-[480px] h-[250px] sm:h-[300px] lg:h-[400px] flex justify-center"
      >
        <img
          src="/figmaAssets/video (1).png"
          alt="Video"
          className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300"
        />
      </motion.div>
    </section>
  );
};

export default CustomerJourneySection;
