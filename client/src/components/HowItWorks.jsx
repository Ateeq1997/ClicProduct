"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const howItWorksSteps = [
    {
      image: "/figmaAssets/Purchase Securely.jpg",
      title: t("how_step1_title"),
      description: t("how_step1_desc"),
    },
    {
      image: "/figmaAssets/Ships From Warehouse.jpg",
      title: t("how_step2_title"),
      description: t("how_step2_desc"),
    },
    {
      image: "/figmaAssets/Style Your Room.jpg",
      title: t("how_step3_title"),
      description: t("how_step3_desc"),
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[92px] py-16 sm:py-20 lg:py-28">
      {/* ===== Heading ===== */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 leading-tight">
        {t("how_heading")}
      </h2>

      {/* ===== Steps Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {howItWorksSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <motion.img
              src={step.image}
              alt={step.title}
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[381px] h-auto sm:h-[445px] mb-6 rounded-lg object-cover"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            {/* Title */}
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-xl sm:text-2xl md:text-2xl mb-4 leading-snug">
              {step.title}
            </h3>

            {/* Description */}
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-lg leading-7 max-w-[90%]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
