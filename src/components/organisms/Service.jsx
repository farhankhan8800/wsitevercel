import React from 'react'
import AnimateElement from '../atoms/AnimateElement';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';


const services = [
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Brand Identity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, malesuada et lectus in, consectetur sagittis purus. Sed vel ipsum nec neque sagittis.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Brand Identity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, malesuada et lectus in, consectetur sagittis purus. Sed vel ipsum nec neque sagittis.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Brand Identity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, malesuada et lectus in, consectetur sagittis purus. Sed vel ipsum nec neque sagittis.",
      slug: "services",
    },
    {
      icon: "https://i.imgur.com/hjkcrzO.png",
      title: "Brand Identity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, malesuada et lectus in, consectetur sagittis purus. Sed vel ipsum nec neque sagittis.",
      slug: "services",
    },
  ];
const Service = () => {
  return (
    <section className="relative my-6 text-[var(--fontColor)]">
    <div>
      <p className="text-base uppercase text-primary_color text-center font-medium mb-5">
        services
      </p>
      <div className=" relative">
        <AnimateElement
          animatecontent={
            <h2
              className="text-3xl lg:text-5xl text-center lg:leading-normal tracking-tight text-secondray_color font-semibold"
              data-aos="fade-up"
            >
              Our
              <span className="relative mx-3 text-primary_color">
                Influencer
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
              marking services
            </h2>
          }
        />
      </div>
      <div className="flex justify-center pt-4">
        <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-center max-w-[700px] text-text_color">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-10 lg:mt-28">
      {services.map((item, i) => {
        return (
          <div key={i} className="flex flex-col items-center text-center">
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
            <p className="mt-3 text-base leading-7 text-gray-900 pb-6 text-text_color">
              {item.description}
            </p>
            <Link
              href={item.slug}
              className="text-primary_color inline-flex items-center justify-start gap-4 hover:scale-75 duration-200 transition-transform"
            >
              <span>Learn more</span>
              <FaArrowRightLong />
            </Link>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default Service