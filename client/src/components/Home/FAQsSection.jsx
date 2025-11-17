"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQsSection = () => {
  const { t } = useTranslation();

  const faqItems = t("faqs.items", { returnObjects: true }) || [];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[92px] py-12 sm:py-16">
      {/* Heading */}
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-2xl sm:text-3xl md:text-4xl lg:text-[78.4px] text-center leading-snug sm:leading-normal mb-6 sm:mb-8">
        {t("faqs.heading")}
      </h2>

      {/* Paragraph */}
      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-sm sm:text-base md:text-lg lg:text-[28.2px] text-center max-w-full sm:max-w-[560px] mx-auto mb-10 sm:mb-14 leading-relaxed">
        {t("faqs.paragraph")}
      </p>

      {/* Accordion */}
      <div className="max-w-full sm:max-w-[982px] mx-auto">
        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#1b1b1b] rounded-2xl border border-[#4c4c4c] px-3 sm:px-6 py-2 sm:py-4"
            >
              <AccordionTrigger
                iconType="arrow"
                className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl lg:text-[28.2px] py-3 sm:py-5 hover:no-underline leading-snug sm:leading-normal"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQsSection;
