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

  console.log(room);

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
      <div className="w-full !py-20 !px-8 lg:!px-20 bg-[#f3fdfd]">
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
              {/* Price Section */}
              <div className="border-2 border-yellow-400 rounded-xl !px-6 !py-4 text-center">
                <h2 className="text-4xl font-bold text-black">
                  <span className="text-sm align-top">$</span> {room.price}
                </h2>
                <p className="text-gray-500 text-sm">/per night</p>
              </div>

              {/* Room Info */}
              <div className="flex justify-around !py-3 rounded-xl bg-[#e8faff] text-[#1d5c63] font-medium text-sm !my-3">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line text-lg"></i> Adults: {room.Adults}
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-ruler-line text-lg"></i> Size: {room.size} m²
                </div>
              </div>

              {/* Check-in */}
              <div className="!mt-5">
                <label
                  className="block text-sm text-gray-600 !mb-1"
                  htmlFor="checkin"
                >
                  CHECK-IN
                </label>
                <input
                  id="checkin"
                  type="date"
                  className="w-full !p-3 bg-[#e8faff] rounded-md outline-none"
                  aria-label="Check-in date"
                />
              </div>

              {/* Check-out */}
              <div className="!mt-5">
                <label
                  className="block text-sm text-gray-600 !mb-1"
                  htmlFor="checkout"
                >
                  CHECK-OUT
                </label>
                <input
                  id="checkout"
                  type="date"
                  className="w-full !p-3 bg-[#e8faff] rounded-md outline-none"
                  aria-label="Check-out date"
                />
              </div>

              {/* Book Button */}
              <Link to={`/checkout/${room.id}`}>
                <button className="w-full !py-3 bg-[#22bcec] hover:bg-[#00aee2] transition text-white text-lg rounded-full flex items-center justify-center gap-2 !mt-5">
                  <i className="ri-bookmark-line"></i> BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta !p-[50px] bg-[#df3fdfd]">
        <div className="!py-[100px] rounded-xl bg-white shadow flex items-center justify-center">
          <div className="section-title text-center flex items-center justify-center gap-2 flex-col">
            <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2  font-bricolage tracking-wider uppercase">
              Call to Action
            </span>
            <h1 className="text-6xl font-semibold text-center">
              Do yoy have any questions? <br /> We are available 24/7
            </h1>
            <div className="flex items-center justify-center !pt-[30px] gap-2">
              <button className="w-[170px] h-[50px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white ">
                <i className="bi bi-envelope !pe-2"></i> Get in Touch
              </button>
              <Link to={`/checkout/${room.id}`}>
                <button className="w-[150px] h-[50px]">
                  BOOK NOW <i className="ri-arrow-right-line ps-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recommend */}
      <div className="w-full !py-[100px] !px-[8%] lg:px-[12%] bg-[#f3fdfd]">
        <div className="section-title text-start space-y-4">
          <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider uppercase">
            Welcome Friend
          </span>
          <h1 className="text-6xl font-semibold text-start !pt-[16px]">
            We Recommend
          </h1>
        </div>
        <div className="!mt-5 !pt-5">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              1399: { slidesPerView: 3.5 },
              1199: { slidesPerView: 2.5 },
              991: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            style={{
              padding: "20px 0",
            }}
          >
            {RoomData.map((rooms) => (
              <SwiperSlide key={room.id}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
