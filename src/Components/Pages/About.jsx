import React from "react";
import CountUp from "react-countup";
import aothorImg from "../../assets/faces-4.jpg";
import signatureImg from "../../assets/signature.png";

import heroImg from "../../assets/about-2.png";
import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

const About = () => {
  return (
    <>
      <div className="section-banner !mt-20 !pt-6 relative flex items-center justify-center">
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-1 absolute"
          alt=""
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-2 absolute"
          alt=""
        />
        <img
          src={Element1}
          className="w-full h-full section-banner-element-3 absolute"
          alt=""
        />
        <img
          src={Element2}
          className="w-full h-full section-banner-element-4 absolute"
          alt=""
        />
        <img
          src={Element3}
          className="w-full h-full section-banner-element-5 absolute"
          alt=""
        />
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold">
            {" "}
            We are the largerst <br /> central hotel
          </h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">About</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
