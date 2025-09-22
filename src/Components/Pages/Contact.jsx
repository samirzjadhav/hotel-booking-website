import React from "react";
import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

const Contact = () => {
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
            Get In Touch!
          </h1>
          <div className="!mt-6 sm:!mt-10 bg-[#d5f1f1] w-full max-w-[250px] !p-2 text-sm sm:text-base md:text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Contact Us</span>
          </div>
        </div>
      </div>
      <section className="bg-[#f9fefe] !py-[50px] lg:!py-[100px] w-full !px-[50px] lg:!px-[100px]">
        <div className="w-full !px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xl relative z-[10] !py-20">
          <form action="" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <lebel className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  First Name
                </lebel>
                <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg !px-4 !py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transiton-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                    required
                  />
                  <i className="ri-user-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <lebel className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  Last Name
                </lebel>
                <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg !px-4 !py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transiton-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                    required
                  />
                  <i className="ri-user-smile-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <lebel className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  E-mail
                </lebel>
                <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg !px-4 !py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transiton-all duration-200">
                  <input
                    type="email"
                    placeholder="Enter Your Email id"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                    required
                  />
                  <i className="ri-mail-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <lebel className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  Phone Number
                </lebel>
                <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg !px-4 !py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transiton-all duration-200">
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                    required
                  />
                  <i className="ri-phone-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2 !mt-2">
              <label
                htmlFor=""
                className="text-sm font-semibold uppercase text-[#1d2b3a]"
              >
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Your message..."
                className="w-full bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg !px-4 !py-4 resize-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60 focus:right-2 focus:ring-[#104d1] transiton-all duratiuon-200"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center !mt-4">
              <p className="text-sm text-[#1d2b3a]/80 italic !mb-4 md:mb-0">
                We promise not to disclose your personal information to third
                parties
              </p>
              <button
                type="submit"
                className="bg-[#f2c94c] hover:bg-[#e6b326] text-white !px-10 !py-3 rounded-full font-semibold tracking-widest hover:scale-105 transition-transform duration-300 "
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#f3fcfd] to-[#e0f7fa] !px-[8%]  lg:!px-[12%] !py-[100px] ">
        <div className="mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] !p-8 flex flex-col items-start gap-4 transiton-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center text-3xl">
                <i className="ri-phone-line"></i>
              </div>
              <h4 className="text-[#1d2b3a] font-bold text-xl ">
                +91 (842) 38x 28 04
              </h4>
              <p className="text-base text-[#1d2b3a]/70">
                Call us anytime. we are available 24/7
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] !p-8 flex flex-col items-start gap-4 transiton-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center text-3xl">
                <i className="ri-mail-line"></i>
              </div>
              <h4 className="text-[#1d2b3a] font-bold text-xl ">
                Example@info.com
              </h4>
              <p className="text-base text-[#1d2b3a]/70">
                Write to us. We respond quickly
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] !p-8 flex flex-col items-start gap-4 transiton-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center text-3xl">
                <i className="ri-map-pin-line"></i>
              </div>
              <h4 className="text-[#1d2b3a] font-bold text-xl ">
                Wharf st. 7584, Some City
              </h4>
              <p className="text-base text-[#1d2b3a]/70">
                Call us anytime. we are available 24/7
              </p>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-[20px] overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Gateway%20of%20India%2C%20Mumbai&z=14&output=embed"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="room-location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
