"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const DigitalHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[720px]">
      {/* ===== Background Image ===== */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Mask group"
        src="/figmaAssets/Mask Group (9).jpg"
      />

      {/* ===== Glass Card Section ===== */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <Card className="w-[1297px] rounded-[30px] border-[none] backdrop-blur-[22.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="flex flex-col items-center justify-center gap-6 p-[74px]">
            
            {/* ===== Heading ===== */}
            <h2 className="w-[1188px] [-webkit-text-stroke:2px_#a38062] [font-family:'Poppins',Helvetica] font-bold text-white text-[79px] text-center tracking-[0] leading-[87.7px]">
              {t("hero9.heading")}
            </h2>

            {/* ===== Paragraph ===== */}
            <p className="w-[1088px] [font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[28.8px]">
               {t("hero9.paragraph")}
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
              className="rounded-[200px]"
            >
              <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] transition-all duration-500 hover:bg-[#000000] hover:text-white">
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
