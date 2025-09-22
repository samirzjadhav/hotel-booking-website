import React from "react";

import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";
import blog5 from "../../assets/blog-6.jpg";
import blog6 from "../../assets/blog-12.jpg";
import avatar from "../../assets/review-7.jpg";

const Blogs = () => {
  return (
    <>
      <div className="section-banner booking-banner !mt-5 !pt-6 relative flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-1 absolute object-cover"
          alt="section element"
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element-2 absolute object-cover"
          alt="section element"
        />
        <img
          src={Element1}
          className="w-full h-full section-banner-element-3 absolute object-contain"
          alt="decorative element"
        />
        <img
          src={Element2}
          className="w-full h-full section-banner-element-4 absolute object-contain"
          alt="decorative element"
        />
        <img
          src={Element3}
          className="w-full h-full section-banner-element-5 absolute object-contain"
          alt="decorative element"
        />

        {/* Content */}
        <div className="section-banner-content flex items-center flex-col text-center z-[55] !px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Our Blogs
          </h1>
          <div className="!mt-6 sm:!mt-10 bg-[#d5f1f1] w-full max-w-[250px] !p-2 text-sm sm:text-base md:text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Blog</span>
          </div>
        </div>
      </div>

      <section className="bg-[#f9fefe] !py-[60px] w-full !pb-0 !mb-4">
        <div className="w-full lg:w-[95%] mx-auto !py-16 !px-8 md:!px-14 bg-white rounded-[20px] shadow-xl z-[10]">
          <div className="text-center mb-16">
            <span className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-wedset text-gray-600 ">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold !my-4 text-[#1d2b3a]">
              Popular Publication
            </h2>
          </div>
          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                image: blog1,
                date: "15.02.2025",
                title:
                  "The best travel insurance company for your holiday trip",
              },
              {
                image: blog2,
                date: "15.02.2025",
                title: "Ultimate Guide to Traveling When You Have No Money",
              },
              {
                image: blog3,
                date: "15.02.2025",
                title:
                  "The best travel insurance company for your holiday trip",
              },
              {
                image: blog4,
                date: "15.02.2025",
                title:
                  "The best travel insurance company for your holiday trip",
              },
              {
                image: blog5,
                date: "15.02.2025",
                title:
                  "The best travel insurance company for your holiday trip",
              },
              {
                image: blog6,
                date: "15.02.2025",
                title:
                  "The best travel insurance company for your holiday trip",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt="Blog"
                    className="w-full h-[320px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="!p-6 bg-[#f4fcfc] rounded-b-3xl ">
                  <div className="flex items-center text-sm text-gray-500 gap-2 !mb-4">
                    <img
                      src={avatar}
                      alt="author"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-700">Paul T.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line text-base"></i> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[20px] text-[#1d2b3a] !mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] !mb-6">
                    We help travelers discover affordable flights and exciting
                    destinations with ease. Your next adventure starts here!
                  </p>

                  <a
                    href=""
                    className="text-sm font-semibold text-[#1d2b4a] inline-flex items-center group"
                  >
                    <span className="border-b border-[#1d2b3a]">READ MORE</span>
                    <span className="!ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      ➜
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Desc */}
          <div className="!mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <p className="text-[#2a4b5e] text-sm md:text-base max-w-3xl">
              Explore breathtaking destinations, find the best flight deals, and
              plan your dream journey with ease. From hidden gems to popular
              spots, we bring you closer to adventures that create lasting
              memories.
            </p>
            <button className="bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold !px-8 !py-4 rounded-full transiton duration-300 whitespace-nowrap">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      <div className="w-full lg:px-[12%] px-[8%] flex flex-col items-center justify-center gap-5 relative overflow-hidden bg-transparent !mt-10">
        {/* Section Heading */}
        <span className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-widet text-gray-600">
          Our BLOG
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d2b3a] text-center">
          Latest Blog Publications
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  w-full text-left !p-5">
          {/* Card 1 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog1}
                alt="tropical-beach"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>Sarah W.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>18.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Explore Tropical Beaches This Summer
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Experience the beauty of turquoise waters, soft sands, and
                breathtaking sunsets on the world's most stunning tropical
                beaches.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog2}
                alt="mountain-adventure"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>John D.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>20.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Conquer Majestic Mountain Trails
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover thrilling hiking trails, stunning mountain views, and
                adventures that push your limits and awaken your inner explorer.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog3}
                alt="city-exploration"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>Emma L.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>22.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Hidden Gems in the City
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore lesser-known neighborhoods, local eateries, and cultural
                landmarks that make urban adventures unforgettable.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog4}
                alt="desert-safari"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>Lucas M.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>24.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Thrilling Desert Safaris
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Embark on a desert adventure with dune bashing, camel rides, and
                mesmerizing sunsets across golden sands.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog5}
                alt="forest-hiking"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>Sophia R.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>26.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Forest Hiking Adventures
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Immerse yourself in nature with forest trails, wildlife
                spotting, and fresh air to recharge your soul.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog6}
                alt="snow-winter-trip"
                className="w-full h-56 object-cover tranform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="!p-4 bg-[#f32fbfb]">
              <div className="flex items-center text-sm text-gray-500 gap-2 !mb-2">
                <img
                  src={blog4}
                  alt="author"
                  className="w-6 h-6 rounded-full object-cover "
                />
                <span>Ethan K.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>28.12.2030</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1d2b3a] !mb-2 leading-snug">
                Magical Winter Escapes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Enjoy snowy landscapes, cozy cabins, and winter activities that
                make your holiday season magical.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link"
              >
                READ MORE
                <span className="!ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom paragraph */}
        <div className="!mt-12 text-center text-sm text-[#2a4b5e] max-w-3xl mx-auto">
          Discover more amazing destinations, tips, and travel stories on our
          blog. Whether you’re planning a relaxing beach getaway, a thrilling
          mountain adventure, or a cultural city exploration, we have
          inspiration for every traveler.
        </div>
      </div>
      <section className="bg-[#f9fefe] !py-[100px] w-full flex justify-center">
        <div className="w-full lg:w-[95%] mx-auto !px-6 md:!px-14 bg-white rounded-[20px] shadow-xl text-center relative z-10 !py-12">
          <span className="bg-[#d5f1f1] text-xs !px-4 !py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block !mb-4">
            Newsletter
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1d2b3a] !mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 text-sm !mb-6  mx-auto text-center">
            Get the latest travel tips, exclusive deals, and destination
            inspiration straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="!px-4 !py-3 rounded-lg border border-gray-300 w-full sm:w-auto "
            />
            <button
              type="submit"
              className="bg-[#2a4b5e] text-white !px-6 !py-3 rounded-lg font-semibold hover:bg-[#1d3749] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blogs;
