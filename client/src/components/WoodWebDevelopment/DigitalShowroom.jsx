"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const DigitalShowroom = () => {
  const { t } = useTranslation();

  const showroomImages = [
    {
      src: "figmaAssets/w1.jpg",
      alt: "Showroom image",
      className: "w-[470px] h-[359px] bg-cover bg-center rounded-2xl",
      isBackground: true,
    },
    {
      src: "figmaAssets/w3.jpg",
      alt: "Image",
      className: "w-[471px] h-[360px] object-cover rounded-2xl",
      isBackground: false,
    },
  ];

  const digitalShowroomText = t("digitalShowroom1.paragraphs", { returnObjects: true });
  const imagesTextBelow = t("digitalShowroom1.images", { returnObjects: true })[0]?.text || "";

  return (
    <section className="w-full max-w-[1140px] mx-auto text-center py-24 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-4xl sm:text-5xl leading-tight sm:leading-[62px]">
        {t("digitalShowroom1.heading")}
      </h2>

      {/* Paragraphs above images */}
      {Array.isArray(digitalShowroomText) ? (
        <div className="mt-8 sm:mt-12 flex flex-col gap-4">
          {digitalShowroomText.map((text, index) => (
            <p
              key={index}
              className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-[22px] leading-6 sm:leading-[32px] max-w-full sm:max-w-[950px] mx-auto"
            >
              {text}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-8 sm:mt-12 [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-[22px] leading-6 sm:leading-[32px] max-w-full sm:max-w-[950px] mx-auto">
          {digitalShowroomText}
        </p>
      )}

      {/* Images Row */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-[50px] mt-12 sm:mt-16 flex-wrap">
        {showroomImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center w-full sm:w-[470px]">
            {image.isBackground ? (
              <div
                className={`${image.className} w-full sm:w-[470px] h-[280px] sm:h-[359px]`}
                style={{ backgroundImage: `url(${image.src})` }}
              />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className={`${image.className} w-full sm:w-[471px] h-[280px] sm:h-[360px]`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Paragraph below the images */}
      {imagesTextBelow && (
        <p className="mt-6 sm:mt-8 [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base sm:text-[22px] leading-6 sm:leading-[32px] max-w-full sm:max-w-[950px] mx-auto">
          {imagesTextBelow}
        </p>
      )}
    </section>
  );
};

export default DigitalShowroom;
