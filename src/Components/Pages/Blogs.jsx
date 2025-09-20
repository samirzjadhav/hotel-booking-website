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

      <section className="bg-[#f9fefe] !py-[60px] w-full !pb-0">
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
              {
                image: avatar,
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
