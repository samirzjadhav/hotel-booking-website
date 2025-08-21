import React from "react";

import socialIcon1 from "../../assets/social-icon-1.svg";
import socialIcon2 from "../../assets/social-icon-2.svg";
import socialIcon3 from "../../assets/social-icon-3.svg";
import socialIcon4 from "../../assets/social-icon-4.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="!px-[5%]">
        <footer className="bg-white !px-[7%] !py-[100px]">
          <div className="flex border-b border-gray-400 !pb-[50px] flex-col lg:flex-row lg:justify-between gap-10">
            <div className="lg:w-7/12">
              <Link
                to="/"
                className="text-4xl font-bold font-bricolage text-black"
              >
                Hotel <span className="text-blue-600">lux</span>
              </Link>
              <p className="!mt-5 font-light tracking-wide text-gray-700">
                Subscribe our newsletter:
              </p>
              <div className="!mt-5 flex item-center bg-blue-50 !px-5 !py-3 w-full max-w-md rounded-full">
                <input
                  text="text"
                  placeholder="Enter Your E-mail"
                  className="input bg-transparent flex-1 outline-none justify-end flex placeholder:text-gray-600 text-sm"
                />
                <i className="ri-arrow-right-line text-xl bg-yellow-300 !w-[40px] !h-[40px] flex items-center justify-center rounded-full cursor-pointer"></i>
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <div className="flex flex-col !gap-3">
                    <Link
                      to="/"
                      className="text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="flex flex-col !gap-3">
                    <Link
                      to="/"
                      className="text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col !gap-2">
                    <Link
                      to="/"
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/"
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Terms and Condition
                    </Link>
                    <Link
                      to="/"
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Cookie Policy
                    </Link>

                    <Link
                      to="/"
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition"
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex !pt-[150px] flex-col lg:flex-row lg:justify-between gap-10">
            <div className="lg:w-7/12">
              <div className="flex items-center !gap-3">
                <img
                  src={socialIcon1}
                  className="bg-blue-100 !p-2 rounded-full hover:bg-[#00c3ff] cursor-pointer transition"
                  alt=""
                />
                <img
                  src={socialIcon2}
                  className="bg-blue-100 !p-2 rounded-full hover:bg-[#00c3ff] cursor-pointer transition"
                  alt=""
                />
                <img
                  src={socialIcon3}
                  className="bg-blue-100 !p-2 rounded-full hover:bg-[#00c3ff] cursor-pointer transition"
                  alt=""
                />
                <img
                  src={socialIcon4}
                  className="bg-blue-100 !p-2 rounded-full hover:bg-[#00c3ff] cursor-pointer transition"
                  alt=""
                />
              </div>
              <p className="!mt-5 font-light tracking-wide text-gray-700">
                &copy; 2025. All Right Reserved{" "}
                <span className="text-blue-800">SamirJadhav</span>
              </p>
            </div>
            <div className="lg:w-6/12">
              <div className="grid grid-cols-1 md:grid-cols-2 !gap-8">
                <div className="w-2/3">
                  <div className="flex flex-col !gap-4">
                    <h5 className="font-semibold text-2xl">Spain</h5>
                    <p>71 South Los Carneros Raod, Califonia +51 174 705 812</p>
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="flex flex-col !gap-4">
                    <h5 className="font-semibold text-2xl">Argentina</h5>
                    <p>
                      Leehova 40, 2678 MC De Lier, netherlands +31 174 705 811
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
