"use client";

import { useState } from "react";
import React from "react";
import MainButton from "../atoms/MainButton";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobile_sub_menu, setMobile_sub_menu] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-4 pt-8 lg:px-8">
        <Link href="/" className="-m-1.5">
          <Image
            src="https://woost.io/assets/img/logo.png"
            className="w-36"
            alt="logo"
            width={100}
            sizes="100vw"
            height={100}
          />
        </Link>

        <div className="hidden lg:flex lg:gap-x-8 ">
          <Link
            href="/"
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            About Us
          </Link>
          <Link
            href="/influncer"
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Influncer
          </Link>
          <div className="cursor-pointer group hover:bg-gray-100 relative flex gap-1">
            <span className="text-base leading-6 text-dark_color uppercase font-normal group-hover:text-primary_color transition-colors duration-300">
              Pages
            </span>
            <FaAngleDown className="h-6 w-6 text-dark_color group-hover:text-primary_color transition-all duration-300" />
            <div className="hidden group-hover:flex absolute top-6 pt-5 z-30">
              <ul className="flex flex-col text-base leading-6 text-dark_color uppercase font-normal bg-light_color shadow-2xl min-w-40">
                <li>
                  <Link
                    className="block px-2.5 py-2 text-base hover:text-light_color hover:bg-primary_color  leading-6 text-dark_color uppercase font-normal "
                    href="/process"
                  >
                    process
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-2.5 py-2 text-base hover:text-light_color hover:bg-primary_color  leading-6 text-dark_color uppercase font-normal "
                    href="/testimonials"
                  >
                    testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/services"
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Services
          </Link>
        </div>

        <button
          className="bg-primary_color hover:bg-primary_hover px-2 py-1.5 rounded-md lg:hidden"
          onClick={toggleMobileMenu}
        >
          <IoMenu className="h-7 w-7 text-light_color" />
        </button>

        <div className="hidden lg:flex justify-center items-center">
          <div className="relative h-10 w-40">
            <Link
              href="/contact-us"
              className="inline-block text-base items-center bg-[var(--primary-color)] text-[var(--light-color)] py-2 px-7 uppercase font-medium rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden shadow-lg">
          <div className="fixed inset-y-0 left-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-screen">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="https://woost.io/assets/img/logo.png"
                  className="w-36"
                  alt="logo"
                  width={100}
                  sizes="100vw"
                  height={100}
                />
              </Link>
              <button
                type="button"
                className="bg-primary_color hover:bg-primary_hover px-2 py-1.5 rounded-md lg:hidden"
                onClick={toggleMobileMenu}
              >
                <RxCross2 className="h-7 w-7 text-light_color" />
              </button>
            </div>

            <div className="pt-10 flex flex-col gap-8  ">
          <Link
            href="/"
            onClick={toggleMobileMenu}
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={toggleMobileMenu}
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            About Us
          </Link>
          <Link
            href="/influncer"
            onClick={toggleMobileMenu}
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Influncer
          </Link>
          <div className="cursor-pointer group hover:bg-gray-100 relative flex gap-1" onClick={()=>setMobile_sub_menu(!mobile_sub_menu)}>
            <span className="text-base leading-6 text-dark_color uppercase font-normal group-hover:text-primary_color transition-colors duration-300">
              Pages
            </span>
            <FaAngleDown className="h-6 w-6 text-dark_color group-hover:text-primary_color transition-all duration-300" />
           
          </div>


          {
            mobile_sub_menu &&   <ul className="flex flex-col text-base leading-6 text-dark_color uppercase font-normal bg-light_color min-w-36">
            <li>
              <Link
               onClick={toggleMobileMenu}
                className="block px-2.5 py-2 text-base hover:text-light_color hover:bg-primary_color  leading-6 text-dark_color uppercase font-normal "
                href="/process"
              >
                process
              </Link>
            </li>
            <li>
              <Link
               onClick={toggleMobileMenu}
                className="block px-2.5 py-2 text-base hover:text-light_color hover:bg-primary_color  leading-6 text-dark_color uppercase font-normal "
                href="/testimonials"
              >
                testimonials
              </Link>
            </li>
          </ul>
          }

          <Link
            href="/services"
            onClick={toggleMobileMenu}
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            onClick={toggleMobileMenu}
            className="text-base  leading-6 text-dark_color uppercase font-normal hover:text-primary_color"
          >
            Contact Us
          </Link>
   
        </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
