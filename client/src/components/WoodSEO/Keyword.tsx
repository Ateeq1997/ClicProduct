"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Keyword = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#a3806214] backdrop-blur-[2px] backdrop-brightness-[100%] py-[60px] md:py-[89px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 md:px-[92px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[58px]">

          {/* ===== Left Image ===== */}
          <div className="relative w-full max-w-[486px] h-[220px] sm:h-[280px] md:h-[337px] flex-shrink-0 mx-auto md:mx-0">
            <img
              className="w-full h-full rounded-md object-cover"
              alt="Video preview"
              src="figmaAssets/video (1).png"
            />

            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[63px] md:h-[63px] 
              cursor-pointer transition-transform duration-300 hover:scale-110"
              alt="Play Icon"
              src="figmaAssets/div.absolute.png"
            />
          </div>

          {/* ===== Right Side Text ===== */}
          <div className="flex-1 text-center md:text-left">

            {/* Heading */}
            <h2
              className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] 
                text-[32px] sm:text-[40px] md:text-[52px] 
                leading-[40px] sm:leading-[46px] md:leading-[54.1px] 
                tracking-[0.52px] mb-[15px] md:mb-[25px]"
            >
              {t("Keyword1.heading")}
            </h2>

            {/* Paragraph */}
            <p
              className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] 
                text-[16px] sm:text-[18px] md:text-[22px] 
                leading-[24px] sm:leading-[28px] md:leading-[30.8px] 
                mb-[25px] md:mb-[40px]"
            >
              {t("Keyword1.description")}
            </p>

            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex justify-center md:justify-start"
            >
              <Button
                className="h-auto px-6 sm:px-8 py-[12px] sm:py-[15px]
                  bg-white text-[#111111] 
                  rounded-[200px] border border-solid border-[#00000061] 
                  font-poppins font-semibold 
                  text-[16px] sm:text-[18px] md:text-[22px] 
                  transition-all duration-500 ease-in-out
                  hover:bg-[#111111] hover:text-white hover:shadow-lg"
              >
                {t("simplifyProject.button")}
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Keyword;
