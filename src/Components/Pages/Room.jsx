import React, { useState } from "react";
import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import RoomData from "../../../Rooms.json";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Room = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Economy", "Standard", "Luxury"];

  const filteredRooms =
    activeTab === "All"
      ? RoomData
      : RoomData.filter((room) => room.type === activeTab);

  return (
    <>
      {/* Banner */}
      <div className="section-banner !mt-20 !pt-6 relative flex items-center justify-center">
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
            Choose the room <br /> of your dream
          </h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Rooms</span>
          </div>
        </div>
      </div>

      {/* Search + Tabs */}
      <div className="section-wrapper">
        <div className="w-full lg:!px-[12%] !px-[8%] !py-[150px]">
          <div className="rooms-search-info flex flex-col md:flex-row gap-5 md:gap-0">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold flex items-center gap-3">
                Search Results{" "}
                <span className="bg-[#ecb934] !p-3 !py-2 rounded-md text-white text-3xl">
                  {filteredRooms.length}
                </span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <div className="search-tabs flex justify-end gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`!px-3 !py-1 rounded-md transition duration-200 ${
                      activeTab === tab
                        ? "bg-[#23bcec] text-white"
                        : "bg-transparent hover:bg-[#23bcec] hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="w-full lg:!px-[12%] !pb-[100px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRooms.map((rooms) => (
              <div
                key={rooms.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms"
              >
                <div className="relative">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[280px] custom-swiper"
                  >
                    {rooms.photo?.map((photo, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`/${photo}`}
                          er
                          alt={`${rooms.title} ${index + 1}`}
                          className="w-full h-[280px] object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="bg-[#e8faff] flex gap-4 !px-4 !py-3 text-sm">
                  <span className="flex items-center gap-1">
                    <i className="bg-white shadow rounded !py-1 !px-3 ri-user-line"></i>
                    Adults: {rooms.Adults}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="bg-white shadow rounded !py-1 !px-3 ri-aspect-ratio-line"></i>
                    Size: {rooms.size}
                  </span>
                </div>
                <Link to={`/rooms/${rooms.id}`}>
                  <div className="!px-6 !pt-4 !pb-4">
                    <div className="!py-4">
                      <h3 className="text-2xl font-semibold !mb-1">
                        {rooms.title}
                      </h3>
                      <p className="text-md text-gray-500">
                        {rooms.discription}
                      </p>
                      <div className="border-t !mt-4 !pt-4 flex justify-between item-center">
                        <p className="text-lg font-bold text-[#000]">
                          ${rooms.price}
                        </p>
                        <button className="w-12 h-12 bg-[#23bcec] rounded-full flex item-center justify-center text-white text-xl">
                          <i className="ri-bookmark-line flex items-center"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
