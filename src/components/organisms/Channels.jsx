import React from "react";
import ProcessSolve from "./ProcessSolve";
import Image from "next/image";

const services = [
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Facebook",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Twitter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Youtube",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Instagram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "TikTok",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Podcast",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "services",
    },
  ];
const Channels = () => {
  return (
    <section className="mt-20 lg:mt-40">
      <p className="text-base uppercase text-primary_color font-medium">
        Channels
      </p>
      <div>
        <ProcessSolve />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-10 mb-28 lg:mt-28">
      {services.map((item, i) => {
        return (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
              sizes="100vw"
              className="w-16 h-auto"
            />
            <h3 className="text-xl mt-6 font-medium text-secondray_color">
              {item.title}
            </h3>
            <p className="mt-3 text-center text-base leading-7 text-gray-900 pb-6 text-text_color">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
      </div>
    </section>
  );
};

export default Channels;
