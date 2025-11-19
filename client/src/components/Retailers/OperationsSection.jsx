"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const OperationsSection = () => {
  const { t } = useTranslation();

  const operationFeatures = [
    { title: t("operations.feature1") },
    { title: t("operations.feature2") },
    { title: t("operations.feature3") },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 flex flex-col items-center bg-white px-4 sm:px-8 md:px-16">
      {/* ===== Heading ===== */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center tracking-[0.4px] leading-[34px] sm:leading-[38px] md:leading-[42px] lg:leading-[46.2px] mb-8 sm:mb-10">
        {t("operations.heading")}
      </h2>

      {/* ===== Feature Cards ===== */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full md:max-w-[1044px]">
        {operationFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-1 min-w-[250px] sm:min-w-[280px] max-w-[330px]"
          >
            <Card className="bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition">
              <CardContent className="p-5 sm:p-6">
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-[16px] sm:text-[18px] md:text-lg leading-[24px] sm:leading-[28px] md:leading-6 text-center">
                  {feature.title}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OperationsSection;
