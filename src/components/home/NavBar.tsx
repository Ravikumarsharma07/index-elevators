"use client"
import { Forklift, MenuIcon, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="fixed top-0 h-[80px] z-50 w-full px-2 md:px-10 lg:px-16 flex-between border-b border-border bg-background/30 backdrop-blur-lg">
      <div className="flex-center gap-">
      <Forklift strokeWidth={1.4} className=" text-secondary w-11 h-11 md:h-16 md:w-16" />
        {/* <Image src="/index-logo.png" alt="company logo" className="w-[70px] h-[70px] shadow-2xl rounded-full" width={50} height={50} /> */}
        <h1
          className={` text-primary text-[23px] md:text-[30px] leading-[22px] md:leading-[30px] font-semibold flex flex-col `}
        >
          <span>Index</span> Elevators
        </h1>
      </div>

        {/* ########    for large screens       ######### */}
      <nav className="max-sm:hidden flex-center mt-3 gap-10 text-[16px] md:text-[18px] font-sans font-semibold">
        <Link href="#home" className="nav-link-animation">
          Home
        </Link>
        <Link href="#about" className="nav-link-animation">
          About Us
        </Link>
        <Link href="#products" className="nav-link-animation">
          Products
        </Link>
        <Link href="#contact" className="nav-link-animation">
          Contact Us
        </Link>
      </nav>

        {/* ########    for small screens       ######### */}
        <nav className={`absolute top-0 left-0 w-full shadow-2xl shadow-secondry z-50 bg-primary flex-center-col overflow-hidden ${isVisible ? "max-h-[300px] opacity-100" : "max-h-0 invisible opacity-0"} transition-all ease-linear duration-300 sm:hidden py-10 gap-8 text-[18px] md:text-[18px] font-sans font-semibold`}>
          <X
            onClick={() => setIsVisible(!isVisible)}
            className="absolute top-7 right-4 text-secondary"
            size={30}
          />
          <Link onClick={() => setIsVisible(!isVisible)} href="#home" className="nav-link-animation">
            Home
          </Link>
          <Link onClick={() => setIsVisible(!isVisible)} href="/#about" className="nav-link-animation">
            About Us
          </Link>
          <Link onClick={() => setIsVisible(!isVisible)} href="/#products" className="nav-link-animation">
            Products
          </Link>
          <Link onClick={() => setIsVisible(!isVisible)} href="/#contact" className="nav-link-animation">
            Contact Us
          </Link>
        </nav>

      <div className="flex-center gap-4">
        <a href="tel:+917827881632">
          <PhoneCall className="text-4xl text-secondary w-7 h-[1.7rem] md:h-10 md:w-20 hover:rotate-[12deg]" />
        </a>
      <MenuIcon
        onClick={() => setIsVisible(!isVisible)}
        className="sm:hidden text-secondary"
        size={30}
        />
        </div>
    </header>
  );
};

export default NavBar;
