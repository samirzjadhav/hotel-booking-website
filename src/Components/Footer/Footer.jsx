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
        <div className="bg-white !px-[7%] !py-[100px]">
          <div className="flex border-b border-gray-400 !pb-[50px] flex-col lg:flex-row lg:justify-between gap-10">
            <div className="lg:w-7/12">
              <Link
                to="/"
                className="text-4xl font-bold font-bricolage text-black"
              >
                Hotel <span className="text-blue-600">lux</span>
              </Link>
              <p className="!mt-5 font-light tracking-wide text-gray-700">
                {" "}
                Subscribe our newsletter:
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
