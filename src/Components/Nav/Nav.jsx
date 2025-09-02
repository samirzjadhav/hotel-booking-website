import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookmark from "../../assets/bookmark.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar bg-white !px-[3%] h-[100px] w-full  fixed top-5 left-0  lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-[#11111] shadow-sm" : "bg-transparent"
        } `}
      >
        <Link to="/" className="text-4xl font-bold logo font-bricolage">
          Hotel <span>Lux</span>
        </Link>

        {/* Menu */}
        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:py-4 ms:pl-5 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-100 "
          } lg:max-h-full lg-opacity-100 gap-10 text-sm font-medium  `}
        >
          <li>
            <Link
              to="/"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* RIGHT SIDE BUTTONS  */}
        <div className="flex items-center gap-3">
          {/* Book Now Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn custom-btn bg-[#ecb934] flex items-center px-4 py-4 lg:px-16 lg:py-16 rounded-full gap-3 text-white uppercase tracking-widest"
          >
            <img
              src={bookmark}
              alt="bookmark"
              className="invert brightness-0"
            />
            <span className="hidden xl:block">Book Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`${
                  isOpen ? "ri-close-line" : "ri-menu-line"
                } text-4xl transition`}
              ></i>
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed nav-form inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,.9)]">
              <div className="bg-white w-full max-w-[500px] !p-[40px] rounded-[15px] shadow-lg relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute hover:bg-[#ecb934] hover:text-white transition duration-300 top-4 right-4 rounded-full w-[50px] h-[50px] text-xl text-black font-bold bg-[#eafbfb]"
                >
                  ✕
                </button>
                <h2 className="text-3xl font-semibold !mb-12">Search</h2>
                <form className="space-y-10">
                  <div className="!mb-10 relative">
                    <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                      Check-in
                    </label>
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      placeholderText="Select Check-in Date"
                      className="w-full !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                      dateFormat="dd/MM/yyyy"
                    ></DatePicker>
                    <i className="ri-calendar-line"></i>
                  </div>
                  <div className="!mb-10 relative">
                    <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                      Check-out
                    </label>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText="Select Check-out Date"
                      className="w-full !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                      dateFormat="dd/MM/yyyy"
                    ></DatePicker>
                    <i className="ri-calendar-line"></i>
                  </div>
                  <div className="!mb-10 relative">
                    <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase !mb-2">
                      Adults
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min="1"
                      className="w-full !p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] !outline-none  no-spinner"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-sky-400 text-white !mt-10 !py-3 px-5 rounded-full w-full uppercase tracking-widest"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
