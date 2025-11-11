"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CustomerJourneySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto py-20 px-6 lg:px-16 gap-10">
      {/* ===== Left Text Content ===== */}
      <div className="flex flex-col items-start max-w-[600px] text-left">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[42px] lg:text-[52px] leading-[54px] mb-6">
          {t("customerJourney.title")}
        </h2>

        <p className="[font-family:'Poppins',Helvetica] text-[#4b4b4b] text-[18px] lg:text-[22px] leading-[30px] mb-8">
          {t("customerJourney.description")}
        </p>

        {/* ===== Animated Button ===== */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Button className="bg-[#111111] hover:bg-[#333333] rounded-[200px] px-8 py-[15px] h-auto border border-solid border-[#00000061] transition-all duration-300">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[20px] lg:text-[22px]">
              {t("customerJourney.button")}
            </span>
          </Button>
        </motion.div>
      </div>

      {/* ===== Animated Image ===== */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-full lg:w-[480px] h-[300px] lg:h-[400px] flex justify-center"
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
