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
    <section className="relative w-full py-20 flex flex-col items-center bg-white">
      {/* ===== Heading ===== */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[40px] text-center tracking-[0.4px] leading-[46.2px] mb-10">
        {t("operations.heading")}
      </h2>

      {/* ===== Feature Cards ===== */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1044px]">
        {operationFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-1 min-w-[300px] max-w-[330px]"
          >
            <Card className="bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-lg leading-6 text-center">
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
