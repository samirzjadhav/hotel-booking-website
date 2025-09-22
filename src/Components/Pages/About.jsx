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
      <div className="section-banner booking-banner !mt-5 !pt-6 relative flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-1 absolute object-cover"
          alt="section element"
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-2 absolute object-cover"
          alt="section element"
        />
        <img
          src={Element1}
          className="w-full h-full section-banner-element-3 absolute object-contain"
          alt="decorative element"
        />
        <img
          src={Element2}
          className="w-full h-full section-banner-element-4 absolute object-contain"
          alt="decorative element"
        />
        <img
          src={Element3}
          className="w-full h-full section-banner-element-5 absolute object-contain"
          alt="decorative element"
        />

        {/* Content */}
        <div className="section-banner-content flex items-center flex-col text-center z-[55] !px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            We are the largerst <br /> central hotel
          </h1>
          <div className="!mt-6 sm:!mt-10 bg-[#d5f1f1] w-full max-w-[250px] !p-2 text-sm sm:text-base md:text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">About</span>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fefe] !py-[80px] !px-[5%] w-full !pb-0">
        <div className="w-full lg:!p-[100px] !p-[20px] md:!p-[40px] bg-white rounded-[20px] shadow-2xl relative z-[10]">
          <div className="mx-auto">
            {/* Heading Section */}
            <div className="!mb-12 text-center lg:text-left">
              <div className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold !mt-4 text-[#1d2b3a]">
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

      <div className="bg-[#f3fdfd] w-full !px-[8%] lg:!px-[12%] !py-[100px] overflow-hidden !pb-0">
        <div className="max-w-7xl mx-auto grid gird-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start relative">
            <img
              src={heroImg}
              alt="hero-img"
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="text-[#1d2b3a] text-center lg:text-left">
            <span className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block !mb-4">
              about us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold !mb-6">
              Discover the <br />{" "}
              <span className="text-[#1d2b3a]"> Truth of nature</span>
            </h2>
            <p className="text-gray-600 text-[15px] !mb-4">
              At <span className="font-semibold">GetSetStay</span>, we believe
              every journey should be more than just travel — it should be an
              experience. Nestled in the heart of nature, our platform connects
              you with handpicked hotels and stays that combine comfort, luxury,
              and authentic local charm. <br />
              Whether you're seeking a peaceful escape, a romantic retreat, or
              an adventurous getaway, we make booking simple, seamless, and
              stress-free. With us, every stay is designed to bring you closer
              to the beauty of nature, creating memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row item-center gap-4 sm:gap-6">
              <button className="bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold !px-6 !py-3 rounded-full transition flex item-center gap-2 uppercase">
                <i className="ri-mail-line"></i> Read More
              </button>
              <a
                href=""
                className="font-semibold text0-[#1d2b3a] inline-flex items-center group uppercase"
              >
                Book Now
                <span className="!ml-1 group-hover:translate-x-1 transiton-tranform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fefe] !py-[50px] w-full !pt-0">
        <div
          className="w-full lg:w-[95%] mx-auto !py-16 !px-16 bg-white rounded-[20px] shadow-2xl relative"
          style={{ margin: "auto" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
            {/* Card 1 */}
            <div className="">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1D2B3a] !mb-2">
                <CountUp end={1244} duration={2.5} suffix="+"></CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Happy Visitors Monthly
              </p>
            </div>
            {/* Card 2 */}
            <div className="">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1D2B3a] !mb-2">
                <CountUp end={24} duration={2.5} suffix="+"></CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Luxury Rooms
              </p>
            </div>
            {/* Card 3 */}
            <div className="">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1D2B3a] !mb-2">
                <CountUp end={44} duration={2.5} suffix="+"></CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Exclusive Facilities
              </p>
            </div>
            {/* Card 4 */}
            <div className="">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1D2B3a] !mb-2">
                <CountUp end={12} duration={2.5} suffix="+"></CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
