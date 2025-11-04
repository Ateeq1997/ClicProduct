"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const DigitalShowroom = () => {
  const { t } = useTranslation();

  const showroomImages = [
    {
      src: "figmaAssets/Image.png",
      alt: "Showroom image",
      className: "w-[470px] h-[359px] bg-cover bg-center rounded-2xl",
      isBackground: true,
      belowText: t("digitalShowroom.images.0.text"),
    },
    {
      src: "figmaAssets/image 15 (1).png",
      alt: "Image",
      className: "w-[471px] h-[360px] object-cover rounded-2xl",
      isBackground: false,
      belowText: t("digitalShowroom.images.1.text"),
    },
  ];

  const digitalShowroomText = t("digitalShowroom.paragraphs", { returnObjects: true });

  return (
    <section className="w-full max-w-[1140px] mx-auto text-center py-16">
      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl leading-[62px]">
        {t("digitalShowroom.heading")}
      </h2>

      {/* Paragraphs */}
      <div className="mt-12 flex flex-col gap-4">
        {digitalShowroomText.map((text, index) => (
          <p
            key={index}
            className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] leading-[32px] max-w-[950px] mx-auto"
          >
            {text}
          </p>
        ))}
      </div>

      {/* Images Row */}
      <div className="flex justify-center gap-[50px] mt-16 flex-wrap">
        {showroomImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center w-[470px]">
            {image.isBackground ? (
              <div
                className={image.className}
                style={{ backgroundImage: `url(${image.src})` }}
              />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            )}
            <p className="mt-6 [font-family:'Poppins',Helvetica] text-[#4b4b4b] text-[20px] leading-[30px] text-center">
              {image.belowText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalShowroom;
