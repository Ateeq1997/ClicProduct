"use client";
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-[92px] px-[111px]">
      <div className="flex gap-[60px] items-center">
        {/* ===== Left Image with Play Icon ===== */}
        <motion.div
          className="relative w-[545px] h-[400px] rounded-md overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.img
            src="/figmaAssets/video.png"
            alt="Video"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08, filter: "brightness(1.15)" }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[80px] h-[80px] bg-white/80 rounded-full flex items-center justify-center cursor-pointer shadow-md backdrop-blur-sm">
              <Play className="w-[36px] h-[36px] text-black" />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Right Text Section ===== */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="w-[634px] [font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[64px] mb-[24px]">
            {t("videoSection.heading")}
          </h2>
          <p className="w-[604px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] leading-[30.8px] mb-[40px]">
            {t("videoSection.description")}
          </p>

          {/* ===== Animated Button ===== */}
          <div className="flex justify-start gap-3">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-[200px] inline-block"
            >
              <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] transition-all duration-300 hover:bg-[#000000]/90">
                {t("videoSection.button")}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
