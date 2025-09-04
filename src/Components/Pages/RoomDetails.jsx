import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import RoomData from "../../../Rooms.json";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const RoomDetails = () => {
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === Number(id));

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
            Get Your <br /> Dream Room
          </h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">RoomsDetails</span>
          </div>
        </div>
      </div>

      <div className="w-full !py-[100px] !px-[8%] lg:!px-[12%] bg-[#f2fdfd]">
        <h2 className="text-6xl font-bricolage font-bold !mb-4">
          {room.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Swiper Section */}
          <Swiper
            spaceBetween={30}
            speed={1000}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full h-[420px] bg-white shadow-lg rounded-xl overflow-hidden custom-swiper"
            style={{ padding: "10px" }}
          >
            {room.photo.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt={`${room.title} ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
