"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.toUpperCase());

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const navigationItems = [
    { label: t("navbar.home"), href: "/" },
    {
      label: t("navbar.products"),
      dropdown: [
        t("navbar.marbles"),
        t("navbar.retailers"),
        t("navbar.architects"),
        t("navbar.renovation"),
      ],
    },
    {
      label: t("navbar.crazy"),
      dropdown: [
        t("navbar.clicSoftware"),
        t("navbar.marbleWeb"),
        t("navbar.woodWeb"),
        t("navbar.marbleSeo"),
        t("navbar.marbleMarketing"),
        t("navbar.woodSeo"),
        t("navbar.woodMarketing"),
      ],
    },
    { label: t("navbar.about"), href: "/about" },
    { label: t("navbar.contact"), href: "/Contact" },
  ];

  return (
    <div className="bg-[#fcfcfc] w-full relative overflow-hidden">
      <header className="relative z-10 bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/figmaAssets/logo.png"
              alt="ClicProduct Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-[Montserrat] font-bold text-[#111111] text-2xl sm:text-3xl leading-none">
              ClicProduct
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4 md:gap-8 mt-2 md:mt-0">
            {navigationItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu
                    key={index}
                    open={openDropdown === item.label}
                    onOpenChange={(open) =>
                      setOpenDropdown(open ? item.label : null)
                    }
                  >
                    <DropdownMenuTrigger
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 font-[Poppins] font-medium text-[#333333] text-base md:text-lg cursor-pointer outline-none whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4 transition-transform duration-300" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="bg-white shadow-lg border border-gray-200 rounded-lg"
                    >
                      {item.dropdown.map((subItem, i) => {
                        const isClicSoftware = subItem === t("navbar.clicSoftware");
                        const isMarbleSEO = subItem === t("navbar.marbleSeo");
                        const isDigitalMarketing = subItem === t("navbar.marbleMarketing");
                        const isDigitalMarketingWood = subItem === t("navbar.woodMarketing");
                        const isManufacturers = subItem === t("navbar.marbles");
                        const isRetailers = subItem === t("navbar.retailers");
                        const isArchitects = subItem === t("navbar.architects");
                        const isRenovation = subItem === t("navbar.renovation");
                        const isWebDevelopment = subItem === t("navbar.marbleWeb");

                        return (
                          <DropdownMenuItem
                            key={i}
                            className="font-[Poppins] text-[#333333] text-base cursor-pointer hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
                          >
                            {isClicSoftware ? (
                              <Link href="/ClicProductSoftware">{subItem}</Link>
                            ) : isWebDevelopment ? (
                              <Link href="/WebDevelopment">{subItem}</Link>
                            ) : isMarbleSEO ? (
                              <Link href="/MarbleSEO">{subItem}</Link>
                            ) : isDigitalMarketing ? (
                              <Link href="/DigitalMarketing">{subItem}</Link>
                            ) : isDigitalMarketingWood ? (
                              <Link href="/DigitalMarketingWood">{subItem}</Link>
                            ) : isManufacturers ? (
                              <Link href="/Manufacturers">{subItem}</Link>
                            ) : isRetailers ? (
                              <Link href="/Retailers">{subItem}</Link>
                            ) : isArchitects ? (
                              <Link href="/Architects">{subItem}</Link>
                            ) : isRenovation ? (
                              <Link href="/Renovation">{subItem}</Link>
                            ) : (
                              <span className="opacity-60 cursor-not-allowed">
                                {subItem} (Coming Soon)
                              </span>
                            )}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="font-[Poppins] font-medium text-[#333333] text-base md:text-lg hover:text-[#111111] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Buttons Section */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 md:mt-0">
            {/* Login Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "#333333",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full"
            >
              <Button className="h-10 sm:h-12 px-6 sm:px-10 bg-[#111111] rounded-full font-[Poppins] font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                {t("navbar.login")}
              </Button>
            </motion.div>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full"
                >
                  <Button className="h-10 sm:h-12 px-6 sm:px-10 bg-[#111111] rounded-full font-[Poppins] font-semibold text-white text-sm sm:text-base flex items-center gap-2 min-w-[140px] sm:min-w-[160px] justify-between whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      {language === "EN" && "🇬🇧 English"}
                      {language === "FR" && "🇫🇷 Français"}
                      {language === "ES" && "🇪🇸 Español"}
                      {language === "IT" && "🇮🇹 Italiano"}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2 rounded-lg">
                <DropdownMenuItem
                  onClick={() => changeLanguage("EN")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-[#333] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇬🇧 English
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("FR")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-[#333] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇫🇷 Français
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("ES")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-[#333] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇪🇸 Español
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("IT")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-[#333] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇮🇹 Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
