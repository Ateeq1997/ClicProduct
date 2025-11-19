"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ManufacturerHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[720px] sm:h-[650px] md:h-[720px] lg:h-[720px]">
      {/* ===== Background Image ===== */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Mask group"
        src="/figmaAssets/Mask Group (1).jpg"
      />

      {/* ===== Glass Card Section ===== */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <Card className="w-full max-w-[1297px] rounded-[30px] border-none backdrop-blur-[22.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="flex flex-col items-center justify-center gap-4 sm:gap-6 p-6 sm:p-12 md:p-[74px]">

            {/* ===== Heading ===== */}
            <h2 className="w-full max-w-[1188px] text-center [-webkit-text-stroke:1.5px_#a38062] sm:[-webkit-text-stroke:2px_#a38062] font-bold text-white text-[32px] sm:text-[50px] md:text-[65px] lg:text-[79px] tracking-[0] leading-[1.1] sm:leading-[1.2] md:leading-[87.7px]">
              {t("hero3.heading")}
            </h2>

            {/* ===== Paragraph ===== */}
            <p className="w-full max-w-[1088px] text-center font-medium text-white text-[14px] sm:text-[18px] md:text-2xl leading-[20px] sm:leading-[26px] md:leading-[28.8px] tracking-[0]">
              {t("hero3.paragraph")}
            </p>

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
              <Button className="h-auto px-4 sm:px-6 md:px-8 py-[10px] sm:py-[12px] md:py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[16px] sm:text-[20px] md:text-[22px] tracking-[0] leading-[normal] transition-all duration-500 hover:bg-[#000000] hover:text-white">
                {t("hero3.button")}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ManufacturerHero;
