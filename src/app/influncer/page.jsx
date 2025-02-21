import ProcessSteps from "@/components/organisms/ProcessSteps";
import TouchIn from "@/components/organisms/TouchIn";
import SubHero from "@/components/SubHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const page = () => {
  return (
    <main>
      <SubHero page_name="Influncer" redirect_page="Home" redirect_url="/" />
      <section className="relative my-6 mt-20 lg:mt-44 max-w-8xl mx-auto p-4">
        <div>
          <p className="text-base uppercase text-primary_color text-center font-medium mb-2">
            Influencer
          </p>
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl text-center lg:leading-normal tracking-tight text-secondray_color font-semibold">
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
          </div>
          <div className="flex justify-center pt-4">
            <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-center max-w-[700px] text-text_color">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-16">
          {data.map((item, index) => (
            <div className="relative" key={index}>
              <Image
                width={100}
                height={100}
                sizes="100vw"
                layout="responsive"
                className="w-full"
                src={item.img}
                alt="Influencer"
              />
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
      <section className="relative my-6 mt-20 lg:mt-44 max-w-8xl mx-auto p-4">
        <div>
          <p className="text-base uppercase text-primary_color  font-medium mb-2">
          Influencers
          </p>
          <div className=" relative">
            <h2 className="text-3xl lg:text-5xl lg:leading-normal tracking-tight text-secondray_color font-semibold">
            Influencers exist in all
              <span className="relative mx-3 text-primary_color">
                Shapes and sizes
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
          </div>
          <p className=" text-xl pt-4 leading-7 font-normal text-gray-900 pb-6  max-w-[700px] text-text_color">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni.
          </p>
        </div>
      <ProcessSteps/>
      <TouchIn/>
      </section>
    </main>
  );
};

export default page;
