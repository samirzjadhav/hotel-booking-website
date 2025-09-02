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

const Services = () => {
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
          <h1 className="text-7xl font-semibold">Our Services</h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Services</span>
          </div>
        </div>
      </div>

      <div className="service w-full lg:!px-[12%] !px-[8%] !py-[150px] flex items-center flex-col justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase">
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
        <div className="service-bottom !mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5">
          <p className="lg:w-1/2">
            Every destination holds a secret, every journey writes a new
            chapter. Step into a world of stories, memories, and
            discovery—crafted just for you.
          </p>
          <button className="w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white uppercase">
            read me
          </button>
        </div>
      </div>

      <div className="features bg-[#f3fdfd] w-full lg:!px-[12%] !px-[8%] !py-[150px] flex flex-col items-center justify-center gap-20 z-[999] relative overflow-hidden">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase">
            features
          </span>
          <h1 className="text-5xl font-semibold !mt-5">
            Feature that will make your vacation inforgettable
          </h1>
        </div>
        <div className="feature-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9]">
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature1}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              Benchfront Location
            </h3>
            <p className="font-light">
              our hotel is situated right on the beach, offering stunning ocen
              views and immediate access to the sandy shores
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature2}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              Luxury Accommodations
            </h3>
            <p className="font-light">
              Experience comfort and style in our well-appointed rooms and
              suites, designed for a relaxing stay.
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature3}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              On-Site Dinning
            </h3>
            <p className="font-light">
              enjoy a variety of culinary delights at our on-site restaurants,
              catering to different tastes and preferences.
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature4}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              Recreational Facilities
            </h3>
            <p className="font-light">
              Our hotel offers a range of recreational activities, including
              water sports, swimming pools, and fitness center
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature5}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              Spa and Wellness Services
            </h3>
            <p className="font-light">
              Unwind and rejuvenate at our spa, where you can indulge in
              messages and treatments for ultimate relaxation
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl !py-14 !px-5"
            style={{ boxShadow: "0px 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature6}
              alt="feature-img"
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] !py-5 !px-5 rounded-lg"
            />
            <h3 className="!mt-12 xl:text-3xl text-2xl !mb-4 font-semibold">
              Surfing Leassons
            </h3>
            <p className="font-light">
              Our hotel offers surfing leassons and equipment rentals, allowing
              guests of all levels to enjoy the thrill of riding the waves
            </p>
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

export default Services;
