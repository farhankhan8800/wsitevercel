import AnimatedNumbers from "@/components/AnimatedNumbers";
import AnimateElement from "@/components/atoms/AnimateElement";
import InfoCard from "@/components/InfoCard";
import Growth from "@/components/organisms/Growth";
import ProcessSolve from "@/components/organisms/ProcessSolve";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <main>
      <SubHero page_name="about us" redirect_page="Home" redirect_url="/" />
      <section className="relative my-6 lg:mt-28 text-[var(--fontColor)] max-w-8xl mx-auto">
        <Growth/>
        <ProcessSolve />
        <AnimatedNumbers />
      </section>
      <section className="relative my-6 mt-44 text-[var(--fontColor)] max-w-8xl mx-auto px-5">
        <div>
          <p className="text-base uppercase text-primary_color text-center font-medium mb-2">
            OUR FOUNDER
          </p>
          <div className=" relative">
            <AnimateElement
              animatecontent={
                <h2
                  className="text-3xl lg:text-5xl text-center leading-normal tracking-tight text-secondray_color font-semibold"
                  data-aos="fade-up"
                >
                  Meet our
                  <span className="relative mx-3 text-primary_color">
                    Great
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
                  Founder
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

        <div className="grid lg:grid-cols-3 gap-8 my-20">
          <div className="flex justify-center items-center flex-col gap-3">
            <div className="pt-5 rounded-full hover:pt-3 hover:pb-2 duration-200">
              <div className="w-[170px]  h-[170px] rounded-full overflow-hidden border-4 shadow-md border-primary_color clear-start">
                <Image
                  src="https://i.imgur.com/OKCeyxi.png"
                  height={170}
                  width={170}
                  className="w-full h-auto"
                  alt="hero image"
                  sizes="100vw"
                />
              </div>
            </div>
            <h3 className="text-3xl font-normal text-center text-secondray_color">
              Jane Doe
            </h3>
            <span className="pt-0.5 bg-primary_color w-32 rounded-lg inline-block"></span>
            <p className="text-base text-gray-900 text-center text-text_color">
              CMO & Founder
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div className="pt-5 rounded-full hover:pt-3 hover:pb-2 duration-200">
              <div className="w-[170px]  h-[170px] rounded-full overflow-hidden border-4 shadow-md border-primary_color clear-start">
                <Image
                  src="https://i.imgur.com/OKCeyxi.png"
                  height={170}
                  width={170}
                  className="w-full h-auto"
                  alt="hero image"
                  sizes="100vw"
                />
              </div>
            </div>
            <h3 className="text-3xl font-normal text-center text-secondray_color">
              Jane Doe
            </h3>
            <span className="pt-0.5 bg-primary_color w-32 rounded-lg inline-block"></span>
            <p className="text-base text-gray-900 text-center text-text_color">
              CMO & Founder
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div className="pt-5 rounded-full hover:pt-3 hover:pb-2 duration-200">
              <div className="w-[170px]  h-[170px] rounded-full overflow-hidden border-4 shadow-md border-primary_color clear-start">
                <Image
                  src="https://i.imgur.com/OKCeyxi.png"
                  height={170}
                  width={170}
                  className="w-full h-auto"
                  alt="hero image"
                  sizes="100vw"
                />
              </div>
            </div>
            <h3 className="text-3xl font-normal text-center text-secondray_color">
              Jane Doe
            </h3>
            <span className="pt-0.5 bg-primary_color w-32 rounded-lg inline-block"></span>
            <p className="text-base text-gray-900 text-center text-text_color">
              CMO & Founder
            </p>
          </div>
        </div>
        <TouchIn />
      </section>
    </main>
  );
};

export default page;
