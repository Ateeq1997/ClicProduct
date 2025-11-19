
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MarbleWebsiteSection = () => {
  const { t } = useTranslation();
  const bulletPoints = t("visualizeRealism3.bulletPoints", { returnObjects: true });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[92px] py-[90px]">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[60px]">
        {/* ===== Left Side Text ===== */}
        <div className="flex-1 min-w-full lg:min-w-[600px]">
          {/* ===== Heading ===== */}
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] tracking-[0.52px] leading-[44px] sm:leading-[52px] md:leading-[60px] lg:leading-[72.8px] mb-[40px] sm:mb-[60px]">
            {t("visualizeRealism3.heading")}
          </h2>

          {/* ===== Description ===== */}
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] sm:leading-[28px] md:leading-[30.8px] mb-[40px] sm:mb-[60px]">
            {t("visualizeRealism3.description")}
          </p>

          {/* ===== Bullet Points ===== */}
          <ul className="space-y-4 sm:space-y-[22px] -mt-[10px] sm:-mt-[20px]">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 sm:gap-[18px]">
                <div className="w-3.5 h-3.5 sm:w-[16px] sm:h-[16px] rounded-full border-[2px] sm:border-[4px] border-black flex-shrink-0 mt-1 sm:mt-[6px]" />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[16px] sm:text-[21px] leading-[22px] sm:leading-[28px]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right Side Images with Hover Animation ===== */}
        <div className="relative w-full sm:w-[305px] h-[300px] sm:h-[400px] flex-shrink-0 mt-8 lg:mt-0 mx-auto lg:mx-10">
          {/* Back Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-[60px] sm:top-[80px] left-0 w-[305px] h-[400px] bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              alt="Design example 1"
               src="figmaAssets/s5.png"
            />
          </motion.div>

          {/* Front Image */}
          <motion.img
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-0 sm:top-0 left-[80px] sm:left-[143px] w-[305px] h-[400px] object-cover rounded-md shadow-lg"
            alt="Design example 2"
            src="figmaAssets/s6.png"
          />
        </div>
      </div>
    </section>
  );
};

export default MarbleWebsiteSection;





// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// const MarbleWebsiteSection = () => {
//   const { t } = useTranslation();
//   const bulletPoints = t("visualizeRealism3.bulletPoints", { returnObjects: true });

//   return (
//     <section className="max-w-[1440px] mx-auto px-[92px] py-[90px]">
//       <div className="flex items-start gap-[30px] flex-wrap">
   
//         <div className="flex-1 min-w-[600px]">
    
//          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] whitespace-pre-line mb-[60px]">
//   {t("visualizeRealism3.heading")}
// </h2>

 
//           <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px] mb-[60px]">
//             {t("visualizeRealism3.description")}
//           </p>

    
//           <ul className="space-y-[22px] -mt-[20px]">
//             {bulletPoints.map((point, index) => (
//               <li key={index} className="flex items-start gap-[18px]">
//                 <div className="w-[16px] h-[16px] rounded-full border-[4px] border-solid border-black flex-shrink-0 mt-[6px]" />
//                 <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[21px] leading-[28px]">
//                   {point}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

    
//         <div className="relative w-[305px] h-[480px] flex-shrink-0 mr-24">
//           {/* Back Image */}
//            <motion.img
//             whileHover={{ scale: 1.05, rotate: -1 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="absolute top-0 left-[143px] w-[305px] h-[400px] object-cover rounded-md shadow-lg"
//             alt="Design example 2"
//             src="figmaAssets/s6.png"
//           />
//           <motion.div
//             whileHover={{ scale: 1.05, rotate: 1 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="absolute top-[80px] left-0 w-[305px] h-[400px] bg-white rounded-md shadow-md overflow-hidden"
//           >
//             <img
//               className="w-full h-full object-cover"
//               alt="Design example 1"
//               src="figmaAssets/s5.png"
//             />
//           </motion.div>

//           {/* Front Image */}
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarbleWebsiteSection;

