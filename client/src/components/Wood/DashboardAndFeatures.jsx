"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardAndFeatures = () => {
  const { t } = useTranslation();

  const metricsData = t("dashboard.metrics", { returnObjects: true });

  return (
  <section
  className="w-full mx-auto py-20 
             px-3 sm:px-5 md:px-8 lg:px-[92px] 
             lg:max-w-[1440px]"
>

      <div
        className="bg-[#a3806214] rounded-lg border border-solid border-[#00000024] 
                   backdrop-blur-[2px] backdrop-brightness-[100%] 
                   p-12 md:p-10 sm:p-6 p-4 
                   flex flex-col items-center gap-8"
      >
        {/* Heading */}
       <h2
  className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-center 
             tracking-[0.52px] leading-[72.8px]
             lg:text-[52px] 
             md:text-[42px] 
             sm:text-[34px] 
             text-[28px]"
>
  {t("dashboard.heading")}
</h2>


        {/* Paragraph */}
        <p
          className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 
                     text-xl text-center tracking-[0] leading-[24.8px] max-w-[502px]
                     md:text-lg sm:text-base text-sm"
        >
          {t("dashboard.subheading")}
        </p>

        {/* Dashboard Image */}
        <img
          className="w-full max-w-[1104px] h-auto object-cover rounded-lg
                     md:max-w-[900px] sm:max-w-full"
          alt={t("dashboard.imageAlt")}
          src="/figmaAssets/image 99.jpg"
        />

        {/* Button */}
        <div className="w-full flex justify-end sm:justify-center md:justify-end">
          <Button
            className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] 
                       [font-family:'Poppins',Helvetica] font-semibold text-white 
                       text-[22px] md:text-[20px] sm:text-[18px] text-[16px]
                       transition-transform duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-lg"
          >
            {t("dashboard.button")}
          </Button>
        </div>

        {/* Features Heading */}
        <h2
          className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] 
                     text-[33px] tracking-[0.33px] leading-[46.2px] mb-1 w-full
                     md:text-[30px] sm:text-[26px] text-[22px]"
        >
          {t("dashboard.featuresHeading")}
        </h2>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full sm:gap-4">
          {metricsData.map((metric, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 shadow-md w-full 
                         transform transition-all duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-8 md:p-6 sm:p-5 p-4 flex flex-col gap-[18px]">
                <div className="flex flex-col gap-2">
                  <h3
                    className="[font-family:'Poppins',Helvetica] font-semibold 
                               text-neutral-900 text-lg tracking-[-0.36px] leading-6
                               md:text-base sm:text-sm"
                  >
                    {metric.title}
                  </h3>
                  <p
                    className="[font-family:'Poppins',Helvetica] font-normal 
                               text-neutral-700 text-sm tracking-[0] leading-[20px]
                               sm:text-xs"
                  >
                    {metric.description}
                  </p>
                </div>

                {/* Metric Value + Progress Bar */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-lg sm:text-base">
                      <span className="text-[#111111] tracking-[-0.06px] leading-6">
                        ${metric.current}{" "}
                      </span>
                      <span className="text-[#b7b6f6] text-xs">
                        / ${metric.total}
                      </span>
                    </div>
                    <span className="text-[#5a6776] text-sm sm:text-xs">
                      {metric.percentage}%
                    </span>
                  </div>

                  <Progress
                    value={metric.percentage}
                    className="h-2.5 bg-violet-200"
                  >
                    <div
                      className="h-full bg-[#111111] rounded-md transition-all"
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </Progress>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardAndFeatures;
