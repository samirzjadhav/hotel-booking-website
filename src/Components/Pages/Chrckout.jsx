import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import feature1 from "../../assets/room-feature-icon-1.svg";
import feature2 from "../../assets/room-feature-icon-2.svg";
import feature3 from "../../assets/room-feature-icon-3.svg";
import feature4 from "../../assets/room-feature-icon-4.svg";
import feature5 from "../../assets/room-feature-icon-5.svg";
import feature6 from "../../assets/room-feature-icon-6.svg";

import amenity1 from "../../assets/room-amenit-1.svg";
import amenity2 from "../../assets/room-amenit-2.svg";
import amenity3 from "../../assets/room-amenit-3.svg";
import amenity4 from "../../assets/room-amenit-4.svg";

import RoomData from "../../../Rooms.json";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Checkout = () => {
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === Number(id));

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Banner */}
      <div className="section-banner !mt-5 !pt-6 relative flex items-center justify-center">
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-1 absolute"
          alt="section element"
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-2 absolute"
          alt="section element"
        />
        <img
          src={Element1}
          className="w-full h-full section-banner-element-3 absolute"
          alt="decorative element"
        />
        <img
          src={Element2}
          className="w-full h-full section-banner-element-4 absolute"
          alt="decorative element"
        />
        <img
          src={Element3}
          className="w-full h-full section-banner-element-5 absolute"
          alt="decorative element"
        />
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold">
            Booking <br /> Confirmation
          </h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] !p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Checkout</span>
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <div className="!py-[150px] !px-[8%] w-full">
        <div className="bg-[#f7fefe] rounded-3xl shadow-md !p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ">
          {/* Form section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold !mb-6">Confirm & Payment</h2>
            <form
              action=""
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="">
                  <label
                    htmlFor=""
                    className="block text-sm font-semibold text-gray-600 !mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full !p-3 rounded-md bg-[#e8fafa] outline-noen"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className="block text-sm font-semibold text-gray-600 !mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full !p-3 rounded-md bg-[#e8fafa] outline-noen"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className="block text-sm font-semibold text-gray-600 !mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full !p-3 rounded-md bg-[#e8fafa] outline-noen"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className="block text-sm font-semibold text-gray-600 !mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Number"
                    className="w-full !p-3 rounded-md bg-[#e8fafa] outline-noen"
                  />
                </div>
              </div>
              <button
                type="Submit"
                className="bg-[#1cb6be] text-white !px-6 !py-3 rounded-full font-medium !mt-4 hover:bg-[#16a3aa] transition duration-300"
              >
                <i className="ri-bookmark-line !mr-2"></i> Confirm and Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
