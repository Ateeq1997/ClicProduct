"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardAndFeatures = () => {
  const { t } = useTranslation();

  // Pull metrics from i18n JSON
  const metricsData = t("dashboard.metrics", { returnObjects: true });

  return (
    <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
      <div className="bg-[#a3806214] rounded-lg border border-solid border-[#00000024] backdrop-blur-[2px] backdrop-brightness-[100%] p-12 flex flex-col items-center gap-8">
        {/* Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px]">
          {t("dashboard.heading")}
        </h2>

        {/* Paragraph */}
        <p className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl text-center tracking-[0] leading-[24.8px] max-w-[502px]">
          {t("dashboard.subheading")}
        </p>

        {/* Dashboard Image */}
        <img
          className="w-full max-w-[1104px] h-auto object-cover rounded-lg"
          alt={t("dashboard.imageAlt")}
          src="/figmaAssets/image 99.jpg"
        />

        {/* Button */}
        <div className="w-full flex justify-end">
          <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            {t("dashboard.button")}
          </Button>
        </div>

        {/* Features Heading */}
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[33px] text-left tracking-[0.33px] leading-[46.2px] mb-1 w-full">
          {t("dashboard.featuresHeading")}
        </h2>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {metricsData.map((metric, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 shadow-md w-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-8 flex flex-col gap-[18px]">
                <div className="flex flex-col gap-2">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-neutral-900 text-lg tracking-[-0.36px] leading-6">
                    {metric.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-neutral-700 text-sm tracking-[0] leading-[20px]">
                    {metric.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-lg">
                      <span className="text-[#111111] tracking-[-0.06px] leading-6">
                        ${metric.current}{" "}
                      </span>
                      <span className="text-[#b7b6f6] text-xs tracking-[0]">
                        / ${metric.total}
                      </span>
                    </div>
                    <span className="font-text-sm-regular text-[#5a6776] text-sm">
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
