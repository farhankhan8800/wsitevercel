import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { MdPhoneEnabled } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white">
      <section className=" py-4 lg:py-14">
        <section className="mx-auto max-w-8xl p-4 lg:px-8 lg:flex gap-48 justify-between">
          <div className="text-center py-5 lg:text-left lg:pr-5 mb-6 lg:mb-0">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src="https://kits.moitalk.com/buzkit/wp-content/uploads/sites/2/2022/05/logo.png"
              alt="comma"
              className="inline-block mr-3 w-36"
            />
            <p className="text-base text-text_color font-light leading-relaxed my-4 lg:w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul className="flex gap-4 flex-wrap justify-center lg:justify-start lg:flex-nowrap">
              <li className="border border-primary_color bg-primary_color transition hover:opacity-50 p-2 rounded-full">
                <Link href="#">
                  <IoLogoInstagram fontSize={20} className="bg-primary_color" />
                </Link>
              </li>
              <li className="border border-primary_color bg-primary_color transition hover:opacity-50 p-2 rounded-full">
                <Link href="#">
                  <TfiLinkedin fontSize={20} className="bg-primary_color" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-5">
            <ul className="lg:flex flex-wrap lg:flex-nowrap">
              <li className="lg:px-5 mb-10 lg:mb-0  text-secondray_color justify-center flex flex-col items-center lg:items-start">
                <h5 className="text-base  text-center lg:text-left font-medium uppercase border-primary_color border-b-2 pb-4 mb-5 w-2/4">
                  Address
                </h5>
                <ul className="flex items-center lg:items-start flex-col">
                  <li className="mb-4 ">
                    <Link
                      href="#"
                      className="flex items-center  gap-2 transition hover:text-primary_color"
                    >
                      <FaRegBuilding className="text-primary_color" />
                      <span className="whitespace-nowrap">
                        Home Town Building
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <IoLocationSharp className="text-primary_color" />
                      <span className="lg:whitespace-nowrap">
                        Victoria Street, 3456 Sydney, Australia
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <FiMail className="text-primary_color" />
                      <span className="whitespace-nowrap">
                        hello@domain.com
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <MdPhoneEnabled className="text-primary_color" />
                      <span className="whitespace-nowrap">(01) 2346 3315</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="lg:px-5 mb-10 lg:mb-0 text-secondray_color flex flex-col items-center lg:items-start">
                <h5 className="text-base text-center lg:text-left font-medium uppercase border-primary_color border-b-2 pb-4 mb-5 w-2/4">
                  Company
                </h5>
                <ul>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">About Us</span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Agency</span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Services</span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Network</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="lg:px-5  text-secondray_color flex flex-col items-center lg:items-start">
                <h5 className="text-base text-center lg:text-left font-medium uppercase border-primary_color border-b-2 pb-4 mb-5 w-2/4">
                  Information
                </h5>
                <ul className="flex items-center flex-col">
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Influencer</span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Jobs Opening</span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">
                        Privacy Statement
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition hover:text-primary_color"
                    >
                      <span className="whitespace-nowrap">Resource</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-8xl px-2 py-6 lg:px-8 grid lg:grid-cols-2 gap-4 border-secondary_color border-t-2">
        <p className="text-base font-light text-text_color">
          Woost Internet Private Limited © {new Date().getFullYear()}. All
          Rights Reserved.
        </p>
        <ul className="flex justify-center lg:justify-end gap-8">
          <li className="text-secondray_color">
            <Link
              href="#"
              className="flex items-center gap-2 transition hover:text-primary_color"
            >
              <span className="whitespace-nowrap">Home </span>
            </Link>
          </li>
          <li className="text-secondray_color">
            <Link
              href="#"
              className="flex items-center gap-2 transition hover:text-primary_color"
            >
              <span className="whitespace-nowrap">About Us</span>
            </Link>
          </li>
          <li className="text-secondray_color">
            <Link
              href="#"
              className="flex items-center gap-2 transition hover:text-primary_color"
            >
              <span className="whitespace-nowrap">Network</span>
            </Link>
          </li>
          <li className="text-secondray_color">
            <Link
              href="#"
              className="flex items-center gap-2 transition hover:text-primary_color"
            >
              <span className="whitespace-nowrap">Influencer</span>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
