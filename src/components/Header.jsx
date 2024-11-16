import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-black w-full fixed z-[1]">
      <div className="container flex items-center justify-between text-white">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <NavLink to="/" className="font-bold text-lg uppercase">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="font-bold text-lg uppercase">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="font-bold text-lg uppercase">
              Contact us
            </NavLink>
          </li>
        </ul>
        <ScrollLink
          to="donate"
          smooth={true}
          spy={true}
          className="hidden lg:block uppercase bg-primary text-dark py-3 rounded-[28px] font-bold px-6 cursor-pointer"
        >
          Donate now
        </ScrollLink>
        <FaBars className="lg:hidden text-3xl" onClick={handleNav} />
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-black text-white fixed z-[9999] top-0 left-0 w-full h-screen"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul>
          <li className="font-bold text-lg uppercase px-[15px] py-[20px] leading-[24px] ">
            <NavLink to="/about-us" className="leading-4" onClick={handleNav}>
              Home
            </NavLink>
          </li>
          <li className="font-bold text-lg uppercase px-[15px] py-[20px] leading-[24px] ">
            <NavLink to="/about-us" className="leading-4" onClick={handleNav}>
              About Us
            </NavLink>
          </li>
          <li className="font-bold text-lg uppercase px-[15px] py-[20px] leading-[24px]">
            <NavLink to="/contact-us" onClick={handleNav}>
              Contact Us
            </NavLink>
          </li>
          <li className="uppercase bg-primary text-dark py-3 rounded-[28px] font-bold m-[15px] w-fit px-[15px]">
            <NavLink to="/donate" onClick={handleNav}>
              Donate now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
