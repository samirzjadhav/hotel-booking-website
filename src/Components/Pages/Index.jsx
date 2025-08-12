import React, { useState, useRef } from "react";
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

import zigzag from "../../assets/zigzag.webp";

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const tabs = ["All", "Economy", "Standard", "Luxury"];

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  const swiperRef = useRef(null);
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  const testimonials = [
    {
      name: "Sarah Newman",
      company: "Envato Market",
      message:
        "Booking through this website was a breeze! The interface was intuitive, the options were endless, and I managed to find a luxury resort at an incredible price. What I loved most was how transparent the process was—no hidden fees, no confusion. I even received a reminder email with local travel tips before my trip. This will be my go-to booking platform from now on!",
    },
    {
      name: "Amelia Johnson",
      company: "CodeCanyon",
      message:
        "I was planning a surprise getaway for my partner, and this platform made it so easy! Not only did I find a romantic beachfront villa within minutes, but the customer support also helped me arrange a special dinner by the sea. Everything was seamless—from booking to check-in. The entire trip felt stress-free thanks to this service.",
    },
    {
      name: "Liam Carter",
      company: "ThemeForest",
      message:
        "I travel frequently for work, and finding the right hotel quickly is essential. This website exceeded my expectations! The search filters are spot-on, the booking confirmation was instant, and my stay at the recommended hotel was exactly as described. From location to comfort, everything matched perfectly. Highly recommend for both business and leisure travelers!",
    },
    {
      name: "Nora Madsen",
      company: "Envato Market",
      message:
        "I was skeptical at first because I’ve had bad experiences with other booking sites, but this platform completely changed my mind. The real-time availability updates were accurate, the pricing was fair, and the hotel reviews were genuine. My vacation went exactly as planned, and I’m so glad I trusted this site with my booking!",
    },
    {
      name: "Ethan Patel",
      company: "Creative Market",
      message:
        "Hands down, the best hotel booking experience I've had! The website loads fast, offers great deals, and shows detailed photos so you know exactly what you're getting. I booked a 5-night stay in Bali, and everything—from amenities to service—matched the description perfectly. I’ve already recommended it to my friends and family.",
    },
    {
      name: "Aarav Sharma",
      company: "WanderStay",
      message:
        "Booking through this platform was an absolute breeze! The interface was clean and easy to navigate, and I found amazing deals I couldn’t get anywhere else. Everything from payment to check-in went smoothly, making my trip stress-free and memorable.",
    },
  ];

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
          <h1 className="text-2xl  sm:text-5xl font-semibold !mt-5 w-full xl:w-[50%] mx-auto leading-tight">
            Our Best Rooms
          </h1>
        </div>
      </div>

      <div className="w-full lg:!px-[12%] !px-[8%] !pb-[100px]">
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
                  className="w-full h-[280px] custom-swiper"
                >
                  {rooms.photo?.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/${photo}`} // ✅ prepend / to load from public/
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
              {/* <Link to={`/rooms/${rooms.id}`}> */}
              <div className="!px-6 !pt-4 !pb-4">
                <div className="!py-4">
                  <h3 className="text-2xl font-semibold !mb-1">
                    {rooms.title}
                  </h3>
                  <p className="text-md text-gray-500">{rooms.discription}</p>
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
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>

      <div className="about about-1 bg-[#f3fdfd] lg:!px-[12%] !px-[8%] !py-[150px] flex -items-center flex-col lg:flex-row justify-between gap-2 relative overflow-hidden">
        <div className="section-title text-start space-y-4 relative z-[9] lg:w-1/2 w-full">
          <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase ">
            about us
          </span>
          <h1 className="!pb-5 text-2xl sm:text-5xl font-semibold w-full leading-tight">
            Why more than a million visitors chose us
          </h1>
          <ul className="flex flex-col gap-10">
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">01.</span>
              <div className="space-y-2">
                <h4 className="ms:text-2xl text-xl font-semibold !mb-2">
                  Ocean Oasis
                </h4>
                <p className="text-base md:text-lg">
                  Dive into serenity where the waves whisper your name and the
                  salty breeze carries your worries away. A perfect escape
                  wrapped in nature’s charm.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">02.</span>
              <div className="space-y-2">
                <h4 className="ms:text-2xl text-xl font-semibold !mb-2">
                  Beach Haven
                </h4>
                <p className="text-base md:text-lg">
                  Wake up to golden sunrises and fall asleep to the lullaby of
                  crashing waves. A paradise where luxury meets the rhythm of
                  the ocean.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">03.</span>
              <div className="space-y-2">
                <h4 className="ms:text-2xl text-xl font-semibold !mb-2">
                  Sunset Bliss
                </h4>
                <p className="text-base md:text-lg">
                  Experience magical evenings bathed in hues of orange and gold.
                  Where every sunset tells a story, and every moment becomes a
                  memory.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full about-image">
          <div className="about-images w-full h-full relative z-[9]">
            <img
              src={service1}
              alt="service-images"
              className="about-img about-image1"
            />
            <img
              src={service2}
              alt="service-images"
              className="about-img about-image2"
            />
            <img
              src={service3}
              alt="service-images"
              className="about-img about-image3"
            />
            <img
              src={service4}
              alt="service-images"
              className="about-img about-image4"
            />
            <img
              src={element1}
              alt="element-images"
              className="about-element1"
            />
            <img
              src={element2}
              alt="element-images"
              className="about-element2"
            />
            <img
              src={element3}
              alt="element-images"
              className="about-element3"
            />
          </div>
        </div>
      </div>

      <div className="about-2  bg-[#f3fdfd] lg:!px-[12%] !px-[8%] !py-[150px] relative overflow-hidden !pb-0">
        <div className="about flex flex-col-reverse lg:flex-row items-center justify-between gap-20 relative z-[10]">
          {/* right hero imgae */}
          <div className="w-full lg:w-1/2 relative z-[9]">
            <img
              src={heroImg}
              alt="about"
              className="w-full h-full object-contain relative z-1"
            />
          </div>
          <div className="w-full lg:w-1/2 text-start">
            <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase ">
              about us
            </span>
            <h1 className="!py-5 text-2xl sm:text-5xl font-semibold mx-auto leading-tight">
              Our Goal and Philosophy
            </h1>
            <p className="text-gray-500 !mb-4">
              We believe that every journey begins with a vision, and our
              mission is to transform that vision into reality. Guided by
              passion, innovation, and trust, we strive to create meaningful
              experiences that inspire, connect, and leave a lasting impact on
              the world around us.
            </p>
            <p className="text-gray-500 !mb-4">
              We are driven by a passion to create, inspire, and connect. Our
              philosophy is simple – put people first, dream big, and work with
              integrity. Every step we take is guided by our belief in building
              meaningful experiences that leave a lasting impact.
            </p>
            <div className="flex w-full  sm:flex-row items-center gap-4">
              <button className="bg-[#fdc335] text-white !px-6 !py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#e6ae00] trasniton duration-300 ">
                <img src={zigzag} className="w-[25px] h-[25px]" alt="" />
                Get In Touch
              </button>

              <button className="text-[#1d2b3a] font-semibold flex items-center !py-1 !px-2 gap-2 hover:underline transition">
                Book Now
                <i className="fa-solid fa-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fefe] w-full">
        <div className="w-full mx-auto !py-12 bg-[#eafbfb] rounded-[20px] box-shadow-large relative z-[10]">
          {/* lg:w-[95%] this is for w-full line */}
          <div className="text-center">
            <span className="bg-[#d5f1f1] rounded-full !px-5 !py-2 font-bricolage tracking-wider text-sm uppercase">
              reviews
            </span>
            <h1 className="text-2xl  sm:text-5xl font-semibold !mt-5 w-full xl:w-[50%] mx-auto leading-tight">
              Customer Voices : <br /> Hear What They Say!
            </h1>
            <div className="flex item-center justify-center space-x-4 !mb-6 !mt-6">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`avatar${index}`}
                  className={`cursor-pointer rounded-full object-cover ${
                    activeIndex === index ? "w-16 h-16" : "w-12 h-12"
                  } trasnition-all duration-300`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideToLoop(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto relative ">
            <Swiper
              modules={[Navigation]}
              slideperview={1}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center !px-6 !py-2">
                    <div className="text-[#ecb934] text-4xl !mb-4">“</div>
                    <p className="text-gray-600 text-base-italic max-w-2xl">
                      {testimonial.message}
                    </p>
                    <div className="!mt-4">
                      <h4 className="font-bold text-lg text-[#1d2b3a]">
                        {testimonial.name}
                      </h4>
                      <span className="text-sm uppercase tracking-wide text-gray-400">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={prevRef}
              className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transition !py-2 !px-3 rounded-full bg-blue-300 sm:!ml-5"
            >
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button
              ref={nextRef}
              className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transition !py-2 !px-3 rounded-full bg-blue-300 md:!mr-5"
            >
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
