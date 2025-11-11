"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SimplifyProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#a3806214] backdrop-blur-[2px] backdrop-brightness-[100%] py-[89px]">
      <div className="max-w-[1440px] mx-auto px-[92px]">
        <div className="flex flex-col md:flex-row items-center gap-[58px]">
          {/* ===== Left Image with Play Icon ===== */}
          <div className="relative w-[486px] h-[337px] flex-shrink-0">
            <img
              className="w-full h-full rounded-md object-cover"
              alt="Video preview"
              src="figmaAssets/video (1).png"
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63px] h-[63px] cursor-pointer transition-transform duration-300 hover:scale-110"
              alt="Play Icon"
              src="figmaAssets/div.absolute.png"
            />
          </div>

          {/* ===== Right Text & Button ===== */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[54.1px] mb-[25px]">
              {t("simplifyProject1.heading")}
            </h2>

            {/* Paragraph */}
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] leading-[30.8px] mb-[40px]">
              {t("simplifyProject1.description")}
            </p>

            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button
                className="h-auto px-8 py-[15px] 
                  bg-white text-[#111111] 
                  rounded-[200px] border border-solid border-[#00000061] 
                  font-poppins font-semibold text-[22px] 
                  transition-all duration-500 ease-in-out
                  hover:bg-[#111111] hover:text-white hover:shadow-lg"
              >
                {t("simplifyProject1.button")}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifyProjectSection;
