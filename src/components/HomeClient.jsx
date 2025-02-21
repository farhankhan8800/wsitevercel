"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFormatQuote } from "react-icons/md";
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';


const client_data = [
  {
    id: 1,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur unt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, coempor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    name: "Monu Sharma",
    img_: "https://i.imgur.com/n7IuxxQ.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const HomeClient = () => {
  return (
    <div className="home_client swiper_style">
      <Swiper
       pagination={true} modules={[Autoplay,Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {client_data.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="client_card select-none">
              <div className="flex justify-start items-center gap-1 py-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
              </div>
              <div className="flex justify-start items-center pb-3 relative">
                <div className=" w-[50px]  h-[50px] rounded-full ">
                  <Image
                    width={100}
                    height={100}
                    className="h-auto w-full rounded-full"
                    sizes="100vw"
                    src={client.img_}
                    alt={client.name}
                  />
                </div>
                <div className="ml-4">
                <h4 className="text-base text-secondray_color font-medium">{client.name}</h4>
                <p className="text-gray-400 text-sm">CEO & Founder</p>
                <span className="text-primary_color absolute right-4 top-0 text-5xl">
                    <MdOutlineFormatQuote />
                </span>
                </div>
              </div>
              <p className="mt-3 text-base leading-7 text-gray-900 pb-6 text-text_color">{client.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeClient;
