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
        <div className="flex flex-col gap-10 items-start">
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
                  src={`/${photo}`}
                  alt={`${room.title} ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="!py-[50px]">
            <h2 className="text-3xl font-bold !my-[20px]">Key Features</h2>
            <div className="rooms-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature1}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">
                  Air-Conditioned
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature2}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">Free Wi-Fi</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature3}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">Smart TV</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature4}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">
                  Pet Friendly
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature5}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">
                  Free Lunches
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-md !p-4">
                <img
                  src={feature6}
                  alt=""
                  className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                />
                <p className="font-medium text-gray-600 text-xl">Game Room</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold !my-[20px] !pt-[30px]">
              Description
            </h2>
            <p className="py-3" style={{ fontWeight: "300" }}>
              Our rooms are designed to offer the perfect blend of comfort and
              modern amenities, making your stay relaxing and memorable.
            </p>
            <p className="py-3" style={{ fontWeight: "300" }}>
              Whether you’re here for business or leisure, you’ll enjoy
              complimentary high-speed Wi-Fi, smart entertainment options,
              refreshing air-conditioning, and a cozy atmosphere tailored to
              your needs.
            </p>
            <p className="py-3" style={{ fontWeight: "300" }}>
              With pet-friendly facilities, free lunches, and access to an
              exclusive game room, our space ensures there’s something for
              everyone to enjoy during their stay.
            </p>

            <h2 className="text-3xl font-bold !my-[20px] !pt-[30px]">
              Amenitites
            </h2>
            <div className="">
              <div className="flex flex-col lg:flex-row gap-8 items-start !mb-5">
                <div className="w-full lg:w-2/3">
                  <div className="bg-white !p-[40px] flex flex-col rounded-2xl shadow-lg">
                    <img
                      src={amenity1}
                      alt=""
                      className="w-[60px] h-[60px] !mb-7 !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <h2 className="text-3xl amenit-text font-semibold">
                      Air-Conditioned
                    </h2>
                    <p className="text-gray-600 !mt-3">
                      Stay cool and comfortable at all times with our fully
                      air-conditioned rooms, perfect for any season.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white !p-[40px] flex flex-col rounded-2xl shadow-lg">
                    <img
                      src={amenity2}
                      alt=""
                      className="w-[60px] h-[60px] !mb-7 !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <h2 className="text-3xl amenit-text font-semibold">
                      Free Wi-fi
                    </h2>
                    <p className="text-gray-600 !mt-3">
                      Enjoy high-speed internet access throughout your stay,
                      keeping you connected for work and entertainment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start !mb-5">
                <div className="w-full lg:w-2/3">
                  <div className="bg-white !p-[40px] flex flex-col rounded-2xl shadow-lg">
                    <img
                      src={amenity3}
                      alt=""
                      className="w-[60px] h-[60px] !mb-7 !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <h2 className="text-3xl amenit-text font-semibold">
                      Smart TV
                    </h2>
                    <p className="text-gray-600 !mt-3">
                      Enjoy your favorite shows and movies with our Smart TV,
                      complete with streaming apps.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white !p-[40px] flex flex-col rounded-2xl shadow-lg">
                    <img
                      src={amenity4}
                      alt=""
                      className="w-[60px] h-[60px] !mb-7 !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <h2 className="text-3xl amenit-text font-semibold">
                      Free Transfer
                    </h2>
                    <p className="text-gray-600 !mt-3">
                      Enjoy complimentary transfers to and from the hotel for a
                      hassle-free stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold !my-[20px] !pt-[30px]">
              Location
            </h2>
            <div className="w-full rounded-xl overflow-hidden shadow-md">
              <iFrame
                src="https://www.google.com/maps?q=Gateway%20of%20India%2C%20Mumbai&z=14&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
