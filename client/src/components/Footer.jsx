"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const social = t("footer.social", { returnObjects: true });
  const links = t("footer.links.items", { returnObjects: true });
  const services = t("footer.services.items", { returnObjects: true });

  return (
    <footer className="bg-[#111111] text-white py-16 px-6 sm:px-10 lg:px-[92px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1px_180px_180px_1px_1fr] gap-12">

        {/* Column 1 */}
        <div className="max-w-[320px]">
          <h2 className="text-white font-bold text-[26px] leading-[36px] mb-4 [font-family:'Poppins',Helvetica]">
            {t("footer.column1.title")}
          </h2>
          <p className="text-[#DADADA] text-[15px] leading-[26px] mb-6 [font-family:'Poppins',Helvetica]">
            {t("footer.column1.description")}
          </p>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row mb-8 overflow-hidden rounded-full border border-[#ffffff40]">
            <Input
              type="email"
              placeholder={t("footer.column1.newsletterPlaceholder")}
              className="bg-white text-[#111111] h-[48px] border-none rounded-none text-sm px-5 flex-1 [font-family:'Poppins',Helvetica] focus:outline-none"
            />
            <Button className="h-[48px] bg-white text-[#111111] font-semibold text-sm px-6 rounded-none border-l border-[#0000001A] hover:bg-[#f5f5f5] transition">
              {t("footer.column1.newsletterButton")}
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {Object.entries(social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
              >
                <i className={`fab fa-${key} text-black`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block w-[1px] bg-[#FFFFFF33]"></div>

        {/* Column 2: Links */}
        <div>
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.links.title")}
          </h3>
         <ul className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
  {services.map((service, index) => (
    <li key={index}>{service}</li>
  ))}
</ul>

        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.services.title")}
          </h3>
       <ul className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
  {services.map((service, index) => (
    <li key={index}>{service}</li>
  ))}
</ul>

        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block w-[1px] bg-[#FFFFFF33]"></div>

        {/* Column 4: Address */}
        <div>
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            {t("footer.address.title")}
          </h3>
          <div className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
            <p>{t("footer.address.email")}</p>
            <p>{t("footer.address.phone")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
