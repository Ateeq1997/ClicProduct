
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const DigitalHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[720px] overflow-hidden">
      {/* ===== Background Image with subtle motion ===== */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
        src="/figmaAssets/Mask Group (9).jpg"
          alt="Architect Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ===== Content ===== */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-[60px] lg:px-[92px]">
        <Card className="relative w-full max-w-[1297px] rounded-[30px] border-none backdrop-blur-[22.85px] backdrop-brightness-[100%] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="flex flex-col items-center justify-center gap-6 p-6 sm:p-12 md:p-[50px] lg:p-[74px] text-center relative z-10">
            {/* ===== Heading ===== */}
            <h2 className="w-full max-w-[1188px] [-webkit-text-stroke:2px_#a38062] font-poppins font-bold text-white text-[36px] sm:text-[52px] md:text-[64px] lg:text-[79px] tracking-[0] leading-[40px] sm:leading-[64px] md:leading-[80px] lg:leading-[87.7px]">
              {t("hero9.heading")}
            </h2>

            {/* ===== Description ===== */}
            <p className="w-full max-w-[1088px] font-poppins font-medium text-white text-[16px] sm:text-[20px] md:text-[22px] lg:text-2xl tracking-[0] leading-[22px] sm:leading-[28px] md:leading-[30px] lg:leading-[28.8px]">
              {t("hero9.paragraph")}
            </p>

            {/* ===== Button ===== */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button
                className="mt-4 sm:mt-6 h-auto px-6 sm:px-8 py-[12px] sm:py-[15px]
                  bg-white text-[#111111] 
                  rounded-[200px] border border-solid border-[#00000061] 
                  font-poppins font-semibold text-[18px] sm:text-[22px] 
                  transition-all duration-500 ease-in-out
                  hover:bg-[#111111] hover:text-white hover:shadow-lg"
              >
                {t("hero9.button")}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DigitalHero;
