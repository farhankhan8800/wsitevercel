import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import AnimateElement from "../atoms/AnimateElement";

const data = [
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
  {
    img: "https://i.imgur.com/OsMaUsx.jpeg",
  },
];

const HomeInfluncer = () => {
  return (
    <section className="relative my-6 mt-20 lg:mt-44 max-w-8xl mx-auto">
      <div>
        <p className="text-base uppercase text-primary_color text-center font-medium mb-2">
          Influencer
        </p>
        <div className="relative">
          <AnimateElement
            animatecontent={
              <h2
                className="text-3xl lg:text-5xl text-center lg:leading-normal tracking-tight text-secondray_color font-semibold"
                data-aos="fade-up"
              >
                We know
                <span className="relative mx-3 text-primary_color">
                  Influencers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="absolute w-full h-full left-0 top-[90%]"
                  >
                    <path
                      d="M3,77.5s200.54-11,493,0"
                      transform="translate(-2.75 -68.11)"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></path>
                  </svg>
                </span>
              </h2>
            }
          />
        </div>
        <div className="flex justify-center pt-4">
          <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-center max-w-[700px] text-text_color">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni.
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              All
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              fashion
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              food
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              technology
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              electronics
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              entertainment
            </a>
          </li>
          <li className="inline-flex m-1">
            <a href="" className="py-1 px-3 border border-gray-300 rounded-lg">
              comedy
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mt-4">
        {data.map((item, index) => (
          <div className="relative" key={index}>
            <div className="p-4 bg-[var(--light-bg-color)] rounded-2xl">
              <div>
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="w-full h-52 rounded-2xl"
                  src={item.img}
                  alt="Influencer"
                />
              </div>
              <div>
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <div>
                    <h5 className="text-base">
                      Susan adams{" "}
                      <span>
                        <MdVerified className="inline-block" />
                      </span>
                    </h5>
                    <p className="text-sm text-secondray_color">
                      Barcelona, ESP
                    </p>
                  </div>
                  <div>
                    <h5 className="text-base text-right font-semibold">870k</h5>
                    <p className="text-xs font-medium">followers</p>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <ul className="flex gap-1">
                    <li className="inline-flex">
                      <a
                        href=""
                        className="p-1 border border-gray-300 rounded-lg"
                      >
                        <BiLogoInstagramAlt />
                      </a>
                    </li>
                    <li className="inline-flex">
                      <a
                        href=""
                        className="p-1 border border-gray-300 rounded-lg"
                      >
                        <IoLogoYoutube />
                      </a>
                    </li>
                    <li className="inline-flex">
                      <a
                        href=""
                        className="p-1 border border-gray-300 rounded-lg"
                      >
                        <RiFacebookBoxFill />
                      </a>
                    </li>
                  </ul>
                  <p className="py-1 px-3 text-xs text-green-500 bg-green-200 rounded-2xl">
                    comedy
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <p className="text-sm text-text_color">Advertising Price</p>
                  <p className="text-2xl font-bold">$5200</p>
                </div>
                <div>
                  <ul className="flex justify-between gap-3 items-center">
                    <li className="inline-flex">
                      <a
                        href=""
                        className="p-2 border border-gray-300 rounded-lg"
                      >
                        <IoMailOutline />
                      </a>
                    </li>
                    <li className="inline-flex">
                      <a
                        href=""
                        className="p-2 border border-gray-300 rounded-lg"
                      >
                        <CiBookmark />
                      </a>
                    </li>
                    <li className="inline-flex w-full">
                      <a
                        href=""
                        className="flex gap-3 text-xs w-full justify-center items-center bg-[var(--primary-color)] text-[var(--light-color)] py-2 font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
                      >
                        send message
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 lg:w-[40vw] mx-auto text-center ">
        <p className="text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni. Quis autem vel eum iure.
        </p>
        <div className="relative h-16 w-full mx-auto">
          <Link
            href="/contact-us"
            className="inline-flex gap-3 text-base items-center bg-[var(--primary-color)] text-[var(--light-color)] py-3.5 px-8 uppercase font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
          >
            Join Our Network
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeInfluncer;
