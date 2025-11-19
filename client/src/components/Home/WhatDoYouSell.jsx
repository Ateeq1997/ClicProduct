"use client";
import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDownIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhatDoYouSell = () => {
  const { t } = useTranslation();

  const dashboardCards = [
    {
      title: t("whatDoYouSell.totalSales"),
      value: "$24,560",
      bgColor: "bg-[#111111]",
      valueColor: "text-[#ffffff]",
      textColor: "text-white",
      labelOpacity: "opacity-80",
    },
    {
      title: t("whatDoYouSell.activeUsers"),
      value: "1,024",
      bgColor: "bg-[#ffffff]",
      valueColor: "text-[#111111]",
      textColor: "text-[#111111]",
      labelOpacity: "opacity-70",
    },
    {
      title: t("whatDoYouSell.orders"),
      value: "218",
      bgColor: "bg-[#a3806214]",
      valueColor: "text-[#111111]",
      textColor: "text-[#111111]",
      labelOpacity: "opacity-70",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[92px] py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="
        [font-family:'Poppins',Helvetica] 
        font-bold text-[#111111] 
        text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] xl:text-[68px]
        text-center tracking-[0] 
        leading-tight mb-12
      ">
        {t("whatDoYouSell.heading")}
      </h2>

      {/* Buttons */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#a380620a] rounded-[51px] p-4 sm:p-[35px] inline-flex flex-col sm:flex-row gap-4 sm:gap-[58px] w-full max-w-[950px]">
          
          {/* Marble Button */}
          <Link href="/Marble" className="w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-[200px] inline-block w-full"
            >
              <Button className="
                h-auto 
                w-full 
                px-4 sm:px-6 md:px-8 py-[12px] sm:py-[15px] 
                bg-[#111111] 
                rounded-[200px] 
                [font-family:'Poppins',Helvetica] font-semibold 
                text-white text-[16px] sm:text-[18px] md:text-[22px] 
                tracking-[0] leading-[normal]
              ">
                {t("whatDoYouSell.marble")}
              </Button>
            </motion.div>
          </Link>

          {/* Wood Button */}
          <Link href="/Wood" className="w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-[200px] inline-block w-full"
            >
              <Button
                variant="outline"
                className="
                  h-auto 
                  w-full 
                  px-4 sm:px-6 md:px-8 py-[12px] sm:py-[15px] 
                  bg-white 
                  rounded-[200px] 
                  border border-solid border-[#00000033] 
                  [font-family:'Poppins',Helvetica] font-semibold 
                  text-[#111111] text-[16px] sm:text-[18px] md:text-[22px] 
                  tracking-[0] leading-[normal]
                "
              >
                {t("whatDoYouSell.wood")}
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="relative">
        <Card className="
          bg-[#a3806214] rounded-lg 
          border border-solid border-[#00000024] 
          backdrop-blur-[2px] 
          overflow-hidden
        ">
          <CardContent className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* Image */}
            <div className="flex-1 mb-6 lg:mb-0">
              <img
                className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover rounded-lg"
                alt="Dashboard Preview"
                src="/figmaAssets/image 99.jpg"
              />
            </div>

            {/* Right Panel */}
            <div className="w-full lg:w-[320px] flex flex-col gap-4 sm:gap-6">

              {dashboardCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    className={`${card.bgColor} border-[#313d4f] shadow-md rounded-[14px] border transition-transform`}
                  >
                    <CardContent className="p-4 sm:p-5">
                      
                      <div className="mb-1 sm:mb-2">
                        <span className={`${card.labelOpacity} ${card.valueColor} [font-family:'Poppins',Helvetica] font-semibold text-sm sm:text-base`}>
                          {card.value}
                        </span>
                      </div>

                      <div className={`${card.textColor} [font-family:'Poppins',Helvetica] font-bold text-[18px] sm:text-[22px] md:text-[26px] mb-1 sm:mb-2`}>
                        {card.title}
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                        <TrendingDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#f93c65]" />
                        <span className="text-[#f93c65] font-semibold">4.3%</span>
                        <span className="text-[#111111] font-semibold">
                          {t("whatDoYouSell.downFromYesterday")}
                        </span>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-[200px] inline-block mx-auto w-full text-center mt-4 sm:mt-6"
              >
                <Button
                  className="
                    h-auto w-full 
                    px-4 sm:px-6 py-[12px] sm:py-[15px] 
                    bg-[#111111] 
                    rounded-[200px] 
                    text-white 
                    text-[16px] sm:text-[18px] md:text-[22px] font-semibold
                    [font-family:'Poppins',Helvetica]
                  "
                >
                  {t("whatDoYouSell.seeFullDashboard")}
                </Button>
              </motion.div>

            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatDoYouSell;
