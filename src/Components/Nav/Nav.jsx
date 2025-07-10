import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookmark from "../../assets/bookmark.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [checkInDate, setIsDate] = useState(null);
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
        className={`bg-white px-[8%] h-[100px] w-full  fixed top-5 left-0  lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-[#11111] shadow-sm" : "bg-transparent"
        } `}
      >
        <Link to="/" className="text-4xl font-bold logo font-bricolage">
          Hotel <span>Lux</span>
        </Link>

        {/* Menu */}
        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:py-4 ms:pl-5 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 "
          } lg:max-h-full lg-opacity-100 gap-10 text-sm font-medium  `}
        >
          <li>
            <Link
              to="/"
              className="upeercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:py-0"
            >
              Home
            </Link>
            <Link>hiiew</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
