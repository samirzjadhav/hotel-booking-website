import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import service1 from "../../assets/services-1.jpg";
import service2 from "../../assets/services-2.jpg";
import service3 from "../../assets/services-3.jpg";
import service4 from "../../assets/services-4.jpg";

import feature1 from "../../assets/feature-icon-1.svg";
import feature2 from "../../assets/feature-icon-2.svg";
import feature3 from "../../assets/feature-icon-3.svg";
import feature4 from "../../assets/feature-icon-4.svg";
import feature5 from "../../assets/feature-icon-5.svg";
import feature6 from "../../assets/feature-icon-6.svg";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

const Index = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <>
      <div className="hero w-full lg:!px-[12%] !px-[8%] !py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex flex-col z-9 relative gap-4">
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit !py-1 !px-3 rounded-full text-sm lg:text-base">
            Welcome Friend
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] !mb-5">
            Wandering the world <br /> is living a story untold.
          </h1>
          <form className="w-full flex items-center gap-2 bg-white contact-form lg:!p-2 sm:!p-6">
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Check-in
              </label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select Check-in Date"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              ></DatePicker>
              <i className="ri-calendar-line"></i>
            </div>
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Check-out
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select Check-out Date"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              ></DatePicker>
              <i className="ri-calendar-line"></i>
            </div>
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] !outline-none  no-spinner"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-400 text-white rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[80px] h-[80px]"
            >
              <span className="bi bi-search"></span>
            </button>
          </form>
          <p className="text-[#5a8695] text-base !mt-2">
            Discover unforgettable places, meet amazing people, and collect
            memories that last a lifetime. Your journey begins here.
          </p>
        </div>
      </div>

      <div className="service w-full lg:!px-[12%] !px-[8%] !py-[150px] flex items-center flex-col justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            service
          </span>
          <h1 className="text-5xl font-semibold">
            discover the touch of nature
          </h1>
        </div>
        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service1}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 tranform -translate-x-1/2 bg-white text-center rounded-full !py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              surfing
            </span>
          </div>
          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service2}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Beach vacation
            </span>
          </div>
          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service3}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Beach restaurant
            </span>
          </div>
          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service4}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Swimming pools
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
