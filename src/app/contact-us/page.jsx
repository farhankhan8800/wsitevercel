import Growth from "@/components/organisms/Growth";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import Link from "next/link";
import React from "react";
import { FaRegBuilding } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";

const page = () => {
  return (
    <main>
      <SubHero page_name="Contact Us" redirect_page="Home" redirect_url="/" />
      <section className="relative my-6 lg:mt-44 max-w-8xl mx-auto p-4">
        <Growth />

        <section className="flex flex-col lg:flex-row lg:justify-between gap-10 mt-20 lg:mt-40 mb-28">
          <ul className="px-2">
            <li className="mb-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-2xl transition hover:text-primary_color"
              >
                <FaRegBuilding className="text-primary_color" />
                <span className="whitespace-nowrap">Home Town Building</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-2xl transition hover:text-primary_color"
              >
                <IoLocationSharp className="min-w-6 text-primary_color" />
                <span className="lg:whitespace-nowrap">
                  Victoria Street, 3456 Sydney, Australia
                </span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-2xl transition hover:text-primary_color"
              >
                <FiMail className="text-primary_color" />
                <span className="whitespace-nowrap">hello@domain.com</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-2xl transition hover:text-primary_color"
              >
                <MdPhoneEnabled className="text-primary_color" />
                <span className="whitespace-nowrap">(01) 2346 3315</span>
              </Link>
            </li>
          </ul>

          <iframe
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
            frameBorder="0"
            height={500}
            width={"100%"}
          ></iframe>
        </section>

        <TouchIn />
      </section>
    </main>
  );
};

export default page;
