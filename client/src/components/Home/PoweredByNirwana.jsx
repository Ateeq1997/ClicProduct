"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const PoweredByNirwana = () => {
  const { t } = useTranslation();

  const roomTypes = [
    {
      image: "/figmaAssets/rectangle-92.png",
      title: t("poweredBy.rooms.living.title"),
      description: t("poweredBy.rooms.living.description"),
    },
    {
      image: "/figmaAssets/rectangle-92-1.png",
      title: t("poweredBy.rooms.bedroom.title"),
      description: t("poweredBy.rooms.bedroom.description"),
    },
    {
      image: "/figmaAssets/rectangle-92-3.png",
      title: t("poweredBy.rooms.office.title"),
      description: t("poweredBy.rooms.office.description"),
    },
  ];

  const images = [
    "/figmaAssets/Rectangle 91.jpg",
    "/figmaAssets/image 106.png",
    "/figmaAssets/image 107.png",
    "/figmaAssets/image 108.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16 relative">
      <div className="flex gap-16">
        {/* ✅ Left Side */}
        <div className="flex-1">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] mb-6">
            {t("poweredBy.heading")}
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] mb-8">
            {t("poweredBy.paragraph")}
          </p>

          {/* 🖼️ Slideshow */}
          <div className="relative rounded-lg overflow-hidden h-[532px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Room Preview"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              />
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-[28px] right-[28px] flex gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] border border-[#ccc] hover:bg-white hover:shadow-lg"
                >
                  <ChevronLeftIcon className="w-10 h-10 text-[#111]" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] border border-[#ccc] hover:bg-white hover:shadow-lg"
                >
                  <ChevronRightIcon className="w-10 h-10 text-[#111]" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ✅ Right Side Room Cards */}
        <div className="w-[543px] flex flex-col gap-10">
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 flex gap-6">
                  <motion.img
                    className="w-[202px] h-[202px] rounded-lg object-cover"
                    alt={room.title}
                    src={room.image}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 flex flex-col">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-2xl mb-2">
                      {room.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base mb-auto">
                      {room.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="flex items-center gap-4 self-start mt-2"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px]">
                        {t("poweredBy.readMore")}
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-[#4b4b4b]" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Kitchen Section */}
      <div className="absolute left-[90px] -bottom-[210px] flex items-start gap-[54px]" style={{ zIndex: 5 }}>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-[600px] h-[260px] rounded-lg object-cover shadow-md cursor-pointer"
          alt="Kitchen"
          src="/figmaAssets/rectangle-92-3.png"
        />
        <div className="flex flex-col justify-between py-1 max-w-[600px]">
          <div className="flex flex-col gap-[18px] w-full">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-[26px]">
              {t("poweredBy.rooms.kitchen.title")}
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base leading-[1.8] w-full">
              {t("poweredBy.rooms.kitchen.description")}
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex items-center gap-4 self-start mt-2"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px]">
              {t("poweredBy.readMore")}
            </span>
            <ChevronRightIcon className="w-5 h-5 text-[#4b4b4b]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PoweredByNirwana;
