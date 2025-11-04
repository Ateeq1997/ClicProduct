"use client";
import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-[128px]">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-[#333333] mb-10 text-left">
        Get Into Touch
      </h2>

      {/* Form */}
      <form className="w-full space-y-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-10">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-[48%] px-8 py-5 bg-gray-100 text-black placeholder-black text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-[48%] px-8 py-5 bg-gray-100 text-black placeholder-black text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-10">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full md:w-[48%] px-8 py-5 bg-gray-100 text-black placeholder-black text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full md:w-[48%] px-8 py-5 bg-gray-100 text-black placeholder-black text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Row 3 - Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="8"
            className="w-full px-8 py-5 bg-gray-100 text-black placeholder-black text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        {/* Row 4 - Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative overflow-hidden bg-[#333333] text-white px-12 py-5 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Submit</span>
            <span className="absolute inset-0 bg-gray-700 scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100 z-0"></span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
