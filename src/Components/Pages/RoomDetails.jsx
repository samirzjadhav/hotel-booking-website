import React from "react";
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
            Get Your <br /> Dream Room
          </h1>
          <div className="!mt-10 bg-[#d5f1f1] w-[250px] !p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Room Details</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full !py-20 !px-8 lg:!px-20 bg-[#f2fdfd]">
        <h2 className="text-6xl font-bricolage font-bold !mb-10">
          {room.title}
        </h2>

        <div className="flex flex-col lg:flex-row !gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 flex flex-col !gap-12">
            {/* Swiper Section */}
            <Swiper
              spaceBetween={30}
              speed={1000}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="w-full h-[420px] bg-white shadow-lg rounded-xl overflow-hidden"
            >
              {room.photo.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/${photo}`}
                    alt={`${room.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold !mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 !gap-5">
                {[
                  { icon: feature1, text: "Air-Conditioned" },
                  { icon: feature2, text: "Free Wi-Fi" },
                  { icon: feature3, text: "Smart TV" },
                  { icon: feature4, text: "Pet Friendly" },
                  { icon: feature5, text: "Free Lunches" },
                  { icon: feature6, text: "Game Room" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center !gap-3 bg-white rounded-xl shadow-md !p-4"
                  >
                    <img
                      src={f.icon}
                      alt={f.text}
                      className="w-[50px] h-[50px] !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <p className="font-medium text-gray-600 text-xl">
                      {f.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold !mb-6">Description</h2>
              <p className="text-gray-600 leading-relaxed !mb-4">
                Our rooms are designed to offer the perfect blend of comfort and
                modern amenities, making your stay relaxing and memorable.
              </p>
              <p className="text-gray-600 leading-relaxed !mb-4">
                Whether you’re here for business or leisure, you’ll enjoy
                complimentary high-speed Wi-Fi, smart entertainment options,
                refreshing air-conditioning, and a cozy atmosphere tailored to
                your needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With pet-friendly facilities, free lunches, and access to an
                exclusive game room, our space ensures there’s something for
                everyone to enjoy during their stay.
              </p>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-3xl font-bold !mb-6">Amenities</h2>
              <div className="grid md:grid-cols-2 !gap-8">
                {[
                  {
                    icon: amenity1,
                    title: "Air-Conditioned",
                    desc: "Stay cool and comfortable at all times with our fully air-conditioned rooms, perfect for any season.",
                  },
                  {
                    icon: amenity2,
                    title: "Free Wi-Fi",
                    desc: "Enjoy high-speed internet access throughout your stay, keeping you connected for work and entertainment.",
                  },
                  {
                    icon: amenity3,
                    title: "Smart TV",
                    desc: "Enjoy your favorite shows and movies with our Smart TV, complete with streaming apps.",
                  },
                  {
                    icon: amenity4,
                    title: "Free Transfer",
                    desc: "Enjoy complimentary transfers to and from the hotel for a hassle-free stay.",
                  },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="bg-white !p-10 flex flex-col rounded-2xl shadow-lg"
                  >
                    <img
                      src={a.icon}
                      alt={a.title}
                      className="w-[60px] h-[60px] !mb-7 !p-3 bg-[#d6f6ff] rounded-md"
                    />
                    <h2 className="text-2xl font-semibold">{a.title}</h2>
                    <p className="text-gray-600 !mt-3">{a.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section>
              <h2 className="text-3xl font-bold !mb-6">Location</h2>
              <div className="w-full rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Gateway%20of%20India%2C%20Mumbai&z=14&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="room-location"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 self-start sticky top-[120px]">
            <div className="bg-white !p-8 rounded-2xl shadow-lg">
              <div className="border-2 border-yellow-400 rounded-xl !px-6 !py-4 text-center">
                <h2 className="text-4xl font-bold text-[#000]">
                  <span className="text-sm">$</span> {room.price}
                </h2>
                <p className="text-gray-500 text-sm">/per night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
