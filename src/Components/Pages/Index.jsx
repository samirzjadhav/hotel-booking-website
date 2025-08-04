import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../../Rooms.json";

import heroImg from "../../assets/about.png";

import avatar1 from "../../assets/review-1.jpg";
import avatar2 from "../../assets/review-2.jpg";
import avatar3 from "../../assets/review-3.jpg";
import avatar4 from "../../assets/review-4.jpg";
import avatar5 from "../../assets/review-5.jpg";
import avatar6 from "../../assets/review-6.jpg";

import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Index = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Economy", "Standard", "Luxury"];

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  return (
    <>
      <div className="hero w-full lg:!px-[12%] !px-[8%] !py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex flex-col z-9 relative gap-4">
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit !py-1 !px-3 rounded-full text-sm lg:text-base">
            Welcome Friend
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] !mb-5">
            Wandering the world <br /> is living a story untold.
          </h1>
          <form className="w-full flex items-center gap-2 bg-white contact-form lg:!p-2 sm:!p-6">
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Check-in
              </label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select Check-in Date"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              ></DatePicker>
              <i className="ri-calendar-line"></i>
            </div>
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Check-out
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select Check-out Date"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              ></DatePicker>
              <i className="ri-calendar-line"></i>
            </div>
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="w-auto xl:w-[350px] !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] !outline-none  no-spinner"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-400 text-white rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[80px] h-[80px]"
            >
              <span className="bi bi-search"></span>
            </button>
          </form>
          <p className="text-[#5a8695] text-base !mt-2">
            Discover unforgettable places, meet amazing people, and collect
            memories that last a lifetime. Your journey begins here.
          </p>
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

      <div className="!py-[80px]">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase">
            rooms
          </span>
          <h1 className="text-2xl  sm:text-5xl font-semibold !mt-5 w-full xl:w-[50p%] mx-auto leading-tight">
            Our Best Rooms
          </h1>
        </div>
      </div>
      <div className="w-100 lg:!px-[12%] !px-[8%] !pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((rooms) => (
            <div
              key={rooms.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms "
            >
              <div className="relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className=" w-100 h-[280px] custom-swiper"
                >
                  {rooms.photo?.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/${photo}`} // ✅ prepend / to load from public/
                        alt={`${rooms.title} ${index + 1}`}
                        className="w-100 h-[280px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
