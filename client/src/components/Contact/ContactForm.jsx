"use client";
import React from "react";
import "../../i18n"; // load i18n config
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[92px] py-16 sm:py-24">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-8 sm:mb-10 text-left">
        {t("contact.heading")}
      </h2>

      {/* Form */}
      <form className="w-full space-y-6 sm:space-y-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <input
            type="text"
            placeholder={t("contact.fullName")}
            className="w-full md:w-1/2 px-4 sm:px-6 py-3 sm:py-5 bg-gray-100 text-black placeholder-black text-base sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            className="w-full md:w-1/2 px-4 sm:px-6 py-3 sm:py-5 bg-gray-100 text-black placeholder-black text-base sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <input
            type="tel"
            placeholder={t("contact.phone")}
            className="w-full md:w-1/2 px-4 sm:px-6 py-3 sm:py-5 bg-gray-100 text-black placeholder-black text-base sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder={t("contact.subject")}
            className="w-full md:w-1/2 px-4 sm:px-6 py-3 sm:py-5 bg-gray-100 text-black placeholder-black text-base sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder={t("contact.message")}
            rows={6}
            className="w-full px-4 sm:px-6 py-3 sm:py-5 bg-gray-100 text-black placeholder-black text-base sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-start md:justify-end">
          {/* ===== Animated Button ===== */}
        <motion.div
          whileHover={{
            scale: 1.08,
            backgroundColor: "#ffffff",
            color: "#000000",
            boxShadow: "0 0 25px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-[200px] mt-4"
        >
          <Button className="h-auto px-6 sm:px-8 py-[10px] sm:py-[12px] bg-black rounded-[200px] border border-solid border-[#00000061] font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#ffffff] transition-all duration-500 hover:bg-[#ffffff] hover:text-black">
            {t("contact.submit")}
          </Button>
        </motion.div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
