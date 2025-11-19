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
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[40px] lg:px-[92px] py-16 relative">

      {/* FLEX RESPONSIVE */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-2xl sm:text-3xl md:text-[44px] lg:text-[52px] leading-[1.2] mb-4 sm:mb-6 md:mb-6 lg:mb-8">
            {t("poweredBy.heading")}
          </h2>

          <p className="[font-family:'Poppins',Helvetica] text-[#4b4b4b] text-sm sm:text-base md:text-lg leading-[1.6] mb-6 sm:mb-8 max-w-full md:max-w-[580px]">
            {t("poweredBy.paragraph")}
          </p>

          {/* IMAGE SLIDER */}
          <div className="relative rounded-lg overflow-hidden h-[220px] sm:h-[300px] md:h-[360px] lg:h-[532px]">
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

            {/* Navigation buttons */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-2 sm:gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] border border-[#ccc]"
                >
                  <ChevronLeftIcon className="w-5 h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-[#111]" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] border border-[#ccc]"
                >
                  <ChevronRightIcon className="w-5 h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-[#111]" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – ROOM CARDS */}
        <div className="w-full lg:w-[543px] flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <motion.img
                    className="w-full sm:w-[120px] h-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[202px] lg:h-[202px] rounded-lg object-cover"
                    alt={room.title}
                    src={room.image}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex-1 flex flex-col">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                      {room.title}
                    </h3>

                    <p className="[font-family:'Poppins',Helvetica] text-[#4b4b4b] text-sm sm:text-base md:text-base mb-auto">
                      {room.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="flex items-center gap-2 sm:gap-3 self-start mt-2"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[14px] sm:text-[16px] md:text-[17px]">
                        {t("poweredBy.readMore")}
                      </span>
                      <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#4b4b4b]" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KITCHEN SECTION RESPONSIVE */}
      <div className="relative mt-12 md:mt-16 flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-10 lg:gap-[54px]">
        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] lg:w-[600px] lg:h-[260px] rounded-lg object-cover shadow-md cursor-pointer"
          alt="Kitchen"
          src="/figmaAssets/rectangle-92-3.png"
        />

        {/* TEXT */}
        <div className="flex flex-col justify-between py-1 w-full max-w-full md:max-w-[600px]">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-lg sm:text-xl md:text-[22px] lg:text-[26px]">
              {t("poweredBy.rooms.kitchen.title")}
            </h3>

            <p className="[font-family:'Poppins',Helvetica] text-[#4b4b4b] text-sm sm:text-base md:text-base leading-[1.6]">
              {t("poweredBy.rooms.kitchen.description")}
            </p>
          </div>

          <motion.button
            whileHover={{ x: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex items-center gap-2 sm:gap-3 self-start mt-2 sm:mt-4"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[14px] sm:text-[16px] md:text-[17px]">
              {t("poweredBy.readMore")}
            </span>
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 text-[#4b4b4b]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PoweredByNirwana;
