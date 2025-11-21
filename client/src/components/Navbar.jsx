"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDownIcon, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
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
    { label: t("navbar.contact"), href: "/Contact" },
  ];

  // Mobile dropdown states for Products and Crazy
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    products: false,
    crazy: false,
  });

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="bg-[#fcfcfc] w-full relative overflow-hidden">
      <header className="relative z-10 bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <img
                src="/figmaAssets/logo.png"
                alt="ClicProduct Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-[Montserrat] font-bold text-[#111111] text-2xl sm:text-3xl leading-none">
                ClicProduct
              </span>
            </div>
          </Link>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="md:hidden block"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 ml-32">
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
                      className="flex items-center gap-1 font-[Poppins] font-medium text-[#333333] text-lg cursor-pointer outline-none whitespace-nowrap"
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
                        const isWoodSEO = subItem === t("navbar.woodSeo");
                        const isDigitalMarketing = subItem === t("navbar.marbleMarketing");
                        const isDigitalMarketingWood =
                          subItem === t("navbar.woodMarketing");
                        const isManufacturers = subItem === t("navbar.marbles");
                        const isRetailers = subItem === t("navbar.retailers");
                        const isArchitects = subItem === t("navbar.architects");
                        const isRenovation = subItem === t("navbar.renovation");
                        const isWebDevelopment = subItem === t("navbar.marbleWeb");
                        const isWoodWebDevelopment = subItem === t("navbar.woodWeb");

                        return (
                          <DropdownMenuItem
                            key={i}
                            className="font-[Poppins] text-[#333333] text-base cursor-pointer hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
                          >
                            {isClicSoftware ? (
                              <Link href="/ClicProductSoftware">{subItem}</Link>
                            ) : isWebDevelopment ? (
                              <Link href="/WebDevelopment">{subItem}</Link>
                            ) : isWoodWebDevelopment ? (
                              <Link href="/WoodWebDevelopment">{subItem}</Link>
                            ) : isMarbleSEO ? (
                              <Link href="/MarbleSEO">{subItem}</Link>
                            ) : isWoodSEO ? (
                              <Link href="/WoodSEO">{subItem}</Link>
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
                  className="font-[Poppins] font-medium text-[#333333] text-lg hover:text-[#111111] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">

            {/* LOGIN BUTTON */}
            {/* <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "#333333",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full"
            >
              <Button className="h-14 px-10 bg-[#111111] rounded-full font-[Poppins] font-semibold text-white text-base whitespace-nowrap">
                {t("navbar.login")}
              </Button>
            </motion.div> */}

            {/* LANGUAGE DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full"
                >
                  <Button className="h-14 px-10 bg-[#111111] rounded-full font-[Poppins] font-semibold text-white text-base flex items-center gap-2 min-w-[160px] justify-between whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      {language === "EN" && (
                        <>
                          <img src="/figmaAssets/f1.png" className="w-5 h-5 rounded-sm" />
                          English
                        </>
                      )}
                      {language === "FR" && (
                        <>
                          <img src="/figmaAssets/f2.png" className="w-5 h-5 rounded-sm" />
                          Français
                        </>
                      )}
                      {language === "ES" && (
                        <>
                          <img src="/figmaAssets/f3.png" className="w-5 h-5 rounded-sm" />
                          Español
                        </>
                      )}
                      {language === "IT" && (
                        <>
                          <img src="/figmaAssets/f4.png" className="w-5 h-5 rounded-sm" />
                          Italiano
                        </>
                      )}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>

              {/* Language dropdown width matches button */}
              <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2 rounded-lg min-w-[160px]">
                <DropdownMenuItem
                  onClick={() => changeLanguage("EN")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("FR")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("ES")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("IT")}
                  className="cursor-pointer hover:bg-[#f2f2f2] font-[Poppins] text-base flex items-center gap-2 px-4 py-2 whitespace-nowrap"
                >
                  🇮🇹 Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-6 space-y-4 bg-white border-t">

            {/* MOBILE NAV LIST */}
            {navigationItems.map((item, index) => (
              <div key={index}>
                {!item.dropdown ? (
                  <Link
                    href={item.href}
                    className="block font-[Poppins] text-[#333] text-base py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    {/* Clickable for mobile dropdown */}
                    <p
                      onClick={() =>
                        toggleMobileDropdown(item.label.toLowerCase())
                      }
                      className="font-[Poppins] text-[#333] text-base py-2 flex items-center justify-between cursor-pointer"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdownOpen[item.label.toLowerCase()]
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </p>

                    {/* Only open if clicked */}
                  {mobileDropdownOpen[item.label.toLowerCase()] && (
  <div className="ml-4 space-y-1">
    {item.dropdown.map((subItem, i) => {
      const isClicSoftware = subItem === t("navbar.clicSoftware");
      const isMarbleSEO = subItem === t("navbar.marbleSeo");
      const isWoodSEO = subItem === t("navbar.woodSeo");
      const isDigitalMarketing = subItem === t("navbar.marbleMarketing");
      const isDigitalMarketingWood =
        subItem === t("navbar.woodMarketing");
      const isManufacturers = subItem === t("navbar.marbles");
      const isRetailers = subItem === t("navbar.retailers");
      const isArchitects = subItem === t("navbar.architects");
      const isRenovation = subItem === t("navbar.renovation");
      const isWebDevelopment = subItem === t("navbar.marbleWeb");
      const isWoodWebDevelopment = subItem === t("navbar.woodWeb");

      return (
        <Link
          key={i}
          href={
            isClicSoftware
              ? "/ClicProductSoftware"
              : isWebDevelopment
              ? "/WebDevelopment"
              : isWoodWebDevelopment
              ? "/WoodWebDevelopment"
              : isMarbleSEO
              ? "/MarbleSEO"
              : isWoodSEO
              ? "/WoodSEO"
              : isDigitalMarketing
              ? "/DigitalMarketing"
              : isDigitalMarketingWood
              ? "/DigitalMarketingWood"
              : isManufacturers
              ? "/Manufacturers"
              : isRetailers
              ? "/Retailers"
              : isArchitects
              ? "/Architects"
              : isRenovation
              ? "/Renovation"
              : "#"
          }
          className="block font-[Poppins] text-[#555] text-sm py-1"
          onClick={() => setMobileOpen(false)} // close mobile menu on click
        >
          {subItem}
        </Link>
      );
    })}
  </div>
)}

                  </div>
                )}
              </div>
            ))}

            {/* MOBILE LOGIN BUTTON */}
            {/* <Button className="w-full h-12 bg-[#111111] rounded-full font-[Poppins] font-semibold text-white">
              {t("navbar.login")}
            </Button> */}

            {/* MOBILE LANGUAGE BUTTON */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full h-12 bg-[#111111] rounded-full font-[Poppins] text-white flex justify-between items-center">
                  <span>
                    {language === "EN" && "English"}
                    {language === "FR" && "Français"}
                    {language === "ES" && "Español"}
                    {language === "IT" && "Italiano"}
                  </span>
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2 rounded-lg w-full min-w-full">
                <DropdownMenuItem
                  onClick={() => changeLanguage("EN")}
                  className="font-[Poppins] px-4 py-2"
                >
                  🇬🇧 English
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("FR")}
                  className="font-[Poppins] px-4 py-2"
                >
                  🇫🇷 Français
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("ES")}
                  className="font-[Poppins] px-4 py-2"
                >
                  🇪🇸 Español
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => changeLanguage("IT")}
                  className="font-[Poppins] px-4 py-2"
                >
                  🇮🇹 Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
