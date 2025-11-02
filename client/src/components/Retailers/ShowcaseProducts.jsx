"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ShowcaseProducts = () => {
  const { t } = useTranslation();

  const images = [
    "/figmaAssets/image 105.png",
    "/figmaAssets/image 106.png",
    "/figmaAssets/image 107.png",
    "/figmaAssets/image 108.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-20 bg-white flex flex-col items-center">
      {/* ===== Heading ===== */}
      <h2 className="text-[52px] font-bold text-[#333333] text-center [font-family:'Poppins',Helvetica] mb-4">
        {t("showcase.heading")}
      </h2>

      {/* ===== Paragraph ===== */}
      <p className="max-w-[1024px] text-[22px] text-[#4b4b4b] text-center leading-[30.8px] [font-family:'Poppins',Helvetica] mb-10">
        {t("showcase.description")}
      </p>

      {/* ===== Image Slider ===== */}
      <div className="relative w-[1130px] h-[700px]">
        <img
          src={images[currentIndex]}
          alt={`Showcase ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-[42px] transition-all duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 -left-[70px] transform -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-8 h-8 text-[#333333]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 -right-[70px] transform -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-8 h-8 text-[#333333]" />
        </button>
      </div>

      {/* ===== Image Indicators ===== */}
      <div className="flex justify-center mt-6 gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-[#333]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseProducts;
