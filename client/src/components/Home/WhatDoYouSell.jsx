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
    <section className="max-w-[1440px] mx-auto px-[92px] py-16">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[68px] text-center tracking-[0] leading-[75.5px] mb-12">
        {t("whatDoYouSell.heading")}
      </h2>

      <div className="flex justify-center mb-16">
        <div className="bg-[#a380620a] rounded-[51px] p-[35px] inline-flex gap-[58px]">
          {/* Marble Manufacturers Button */}
          <Link href="/Marble">
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1b1b1b",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-[200px] inline-block"
            >
              <Button className="h-auto w-[432px] px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] transition-all duration-300">
                {t("whatDoYouSell.marble")}
              </Button>
            </motion.div>
          </Link>

          {/* Wood Button */}
          <Link href="/Wood">
          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f5f5f5",
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-[200px] inline-block"
          >
            <Button
              variant="outline"
              className="h-auto w-[432px] px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000033] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] transition-all duration-300"
            >
              {t("whatDoYouSell.wood")}
            </Button>
          </motion.div>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Card className="bg-[#a3806214] rounded-lg border border-solid border-[#00000024] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <CardContent className="p-12 flex gap-8">
            <div className="flex-1">
              <img
                className="w-full h-[577px] object-cover rounded-lg"
                alt="Dashboard Preview"
                src="/figmaAssets/image 99.jpg"
              />
            </div>

            <div className="w-[300px] flex flex-col gap-6">
              {dashboardCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
                    rotate: 0.5,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <Card
                    className={`${card.bgColor} relative border-[#313d4f] shadow-[0px_4px_6.8px_#00000040] rounded-[14px] border border-solid transition-transform duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`${card.labelOpacity} [font-family:'Poppins',Helvetica] font-semibold ${card.valueColor} text-base tracking-[0] leading-[normal]`}
                        >
                          {card.value}
                        </span>
                      </div>
                      <div
                        className={`[font-family:'Poppins',Helvetica] font-bold ${card.textColor} text-[28px] tracking-[1.00px] leading-[normal] mb-2`}
                      >
                        {card.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingDownIcon className="w-4 h-4 text-[#f93c65]" />
                        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#f93c65] text-base tracking-[0] leading-[normal]">
                          4.3%
                        </span>
                        <span
                          className="[font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-base tracking-[0] leading-[normal]"
                        >
                          {t("whatDoYouSell.downFromYesterday")}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

             <motion.div
  whileHover={{
    scale: 1.05,
    backgroundColor: "#1b1b1b",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="rounded-[200px] inline-block mx-auto"
>
  <Button
    className="h-auto px-3 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] transition-all duration-300 whitespace-nowrap ml-[-26px]"
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
