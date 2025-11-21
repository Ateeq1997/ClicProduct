"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const Footer = () => {
  const { t } = useTranslation();

  const social = t("footer.social", { returnObjects: true });
  const links = t("footer.links.items", { returnObjects: true });
  const services = t("footer.services.items", { returnObjects: true });

  const footerRoutes = {
    "Marble Manufacturers": "/Manufacturers",
    "Retailers and Distributors": "/Retailers",
    "Architects and Designers": "/Architects",
    "Renovation Contractors": "/Renovation",
    "ClicProduct Software": "/ClicProductSoftware",
    "Web Development": "/WebDevelopment",
    "Wood Suppliers": "/WoodWebDevelopment",
    "Marble Suppliers": "/MarbleWebDevelopment",
    "SEO": "/MarbleSEO",
  };

  return (
    <footer className="bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-10 lg:px-[92px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1px_180px_180px_1px_1fr] gap-8 sm:gap-12">

        {/* Column 1 */}
        <div className="max-w-full sm:max-w-[320px]">
          <h2 className="text-white font-bold text-[22px] sm:text-[26px] leading-[32px] sm:leading-[36px] mb-4 [font-family:'Poppins',Helvetica]">
            {t("footer.column1.title")}
          </h2>
          <p className="text-[#DADADA] text-[13px] sm:text-[15px] leading-[22px] sm:leading-[26px] mb-6 [font-family:'Poppins',Helvetica]">
            {t("footer.column1.description")}
          </p>

         <div className="flex flex-col sm:flex-row mb-6 sm:mb-8 overflow-hidden rounded-full border border-[#ffffff40]">
  <Input
    type="email"
    placeholder={t("footer.column1.newsletterPlaceholder")}
    className="
      bg-white 
      text-[#111111] 
      h-[44px] sm:h-[48px] 
      border-none 
      rounded-none 
      text-sm 
      px-4 sm:px-5 
      flex-1 
      [font-family:'Poppins',Helvetica]
      placeholder:text-center sm:placeholder:text-left
    "
  />
  <Button
    className="
      h-[44px] sm:h-[48px] 
      bg-white 
      text-[#111111] 
      font-semibold 
      text-sm 
      px-4 sm:px-6 
      rounded-none 
      border-t sm:border-t-0 sm:border-l 
      border-[#0000001A]
      hover:text-white
      transition-colors
    "
  >
    {t("footer.column1.newsletterButton")}
  </Button>
</div>


          <div className="flex gap-3 sm:gap-4 mt-3 flex-wrap">
            {Object.entries(social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
              >
                <i className={`fab fa-${key} text-black text-xs sm:text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Line */}
        <div className="hidden lg:block w-[1px] bg-[#FFFFFF33] ml-4 lg:ml-6"></div>

        {/* Column 2 — LINKS */}
        <div className="ml-0 sm:ml-6 whitespace-nowrap mt-8 sm:mt-0">
          <h3 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.links.title")}
          </h3>

          <ul className="flex flex-col gap-2 sm:gap-3 text-[#DADADA] text-[13px] sm:text-[15px] [font-family:'Poppins',Helvetica]">
            {links.map((item, index) => (
              <li key={index}>
                <Link href={footerRoutes[item]}>
                  <span className="cursor-pointer hover:text-white transition">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — SERVICES */}
        <div className="ml-0 sm:ml-6 whitespace-nowrap mt-8 sm:mt-0">
          <h3 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.services.title")}
          </h3>

          <ul className="flex flex-col gap-2 sm:gap-3 text-[#DADADA] text-[13px] sm:text-[15px] [font-family:'Poppins',Helvetica]">
            {services.map((item, index) => (
              <li key={index}>
                <Link href={footerRoutes[item]}>
                  <span className="cursor-pointer hover:text-white transition">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Line */}
        <div className="hidden lg:block w-[1px] bg-[#FFFFFF33] ml-4 lg:ml-6"></div>

        {/* Column 4 — ADDRESS */}
        <div className="ml-0 sm:ml-6 mt-8 sm:mt-0">
          <h3 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.address.title")}
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3 text-[#DADADA] text-[13px] sm:text-[15px] [font-family:'Poppins',Helvetica]">
            <p>{t("footer.address.email")}</p>
            <p>{t("footer.address.phone")}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
