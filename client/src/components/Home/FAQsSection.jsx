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

  // ✅ No TypeScript syntax, works fine in .jsx
  const faqItems = t("faqs.items", { returnObjects: true }) || [];

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[78.4px] text-center tracking-[0] leading-[normal] mb-8">
        {t("faqs.heading")}
      </h2>
      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[28.2px] text-center tracking-[0] leading-[normal] mb-16 max-w-[560px] mx-auto">
        {t("faqs.paragraph")}
      </p>

      <div className="max-w-[982px] mx-auto">
        <Accordion type="single" collapsible className="space-y-8">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#1b1b1b] rounded-2xl border border-solid border-[#4c4c4c] px-12 py-0"
            >
              <AccordionTrigger
                iconType="arrow"
                className="[font-family:'Poppins',Helvetica] font-normal text-white text-[28.2px] tracking-[0] leading-[normal] py-7 hover:no-underline"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
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
