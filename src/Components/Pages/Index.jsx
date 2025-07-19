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
      <div className="hero w-full lg:px-[12%] px-[8%] py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex-col  gap-4 z-9 relative">
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base">
            Welcome Friend
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] mb-5">
            Wandering the world <br /> is living a story untold.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Index;
