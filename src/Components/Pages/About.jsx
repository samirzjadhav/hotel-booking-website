import React from "react";
import CountUp from "react-countup";
import authorImg from "../../assets/faces-4.jpg";
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
      <div className="bg-[#f9fefe] !py-[80px] !px-[5%] w-full !pb-0">
        <div className="w-full !p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]">
          <div className="mx-auto">
            {/* Heading Section */}
            <div className="!mb-12 text-center lg:text-left">
              <div className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a]">
                Story About Us
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#1d2b3a] leading-relaxed text-[15px]">
              {/* Left Side */}
              <div>
                <p className="!mb-5 text-gray-700">
                  We started our journey with a simple idea — to create
                  meaningful digital experiences that connect people and
                  businesses. What began as a small initiative has now grown
                  into a passionate team of creators, designers, and developers.
                </p>
                <p className="!mb-5 text-gray-700">
                  Over the years, we’ve worked with clients across industries,
                  delivering solutions that are both functional and visually
                  inspiring.
                </p>
              </div>

              {/* Right Side */}
              <div>
                <p className="!mb-5 text-gray-700">
                  Our approach is simple: listen, understand, and craft. Every
                  project is a collaboration where your vision meets our
                  expertise.
                </p>
                <p className="!mb-5 text-gray-700">
                  We believe in transparency, creativity, and innovation, which
                  reflect in everything we build.
                </p>
                <p className="!mb-8 text-gray-700">
                  Today, we continue to push boundaries, aiming to create
                  designs and experiences that truly make an impact.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={authorImg}
                      alt="Emma Millar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="">
                      <div className="font-semibold text-[#1d2b3a]">
                        Emma millar
                      </div>
                      <span className="text-sm text-gray-500">
                        Hotel Administrator
                      </span>
                    </div>
                  </div>
                  <img
                    src={signatureImg}
                    alt="signature"
                    className="w-32 object-container
                  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
