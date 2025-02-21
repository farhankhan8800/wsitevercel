import React from 'react'
import AnimateElement from '../atoms/AnimateElement'
import Image from 'next/image'

const Network = () => {
  return (
    <section className="relative my-6 mt-14 lg:mt-44 text-[var(--fontColor)]">
    <div>
      <p className="text-base uppercase text-primary_color lg:text-center font-medium mb-5">
        Our network
      </p>
      <div className=" relative">
        <AnimateElement
          animatecontent={
            <h2 
              className="text-3xl lg:text-5xl lg:text-center lg:leading-normal tracking-tight text-secondray_color font-semibold"
              data-aos="fade-up"
            >
              We have Strong
              <span className="relative mx-3 text-primary_color">
                Relationship
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
              With influencer <br /> over the world
            </h2>
          }
        />
      </div>
      <div className="flex justify-center pt-4">
        <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-center max-w-[700px] text-text_color">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
      </div>
    </div>

    <div className="my-5 lg:mt-28">
      <div className="col-span-2 ">
        <div className="relative max-w-[700px] w-full">
          <Image
            src="https://i.imgur.com/y3cgz9A.png"
            className="absolute h-[40vh] sm:h-[45vh] lg:h-[55vh] w-full"
            height={100}
            sizes="100vw"
            width={100}
            alt="Image description"
          />
          <Image
            src="https://i.imgur.com/FmKCleM.jpeg"
            className="h-[40vh] sm:h-[45vh] lg:h-[55vh] w-full"
            height={100}
            sizes="100vw"
            width={100}
            alt="Image description"
          />
        </div>
      </div>
    </div>

    <div className="lg:grid grid-cols-3 gap-8 ">
      <div className="col-span-1 "></div>
      <div className="col-span-2 ">
        <div className="max-w-[700px] mb-14 border-l-4 border-l-primary_color pl-6 lg:py-5 lg:pr-4 lg:pl-16 ">
          <h3 className="text-xl lg:text-2xl font-medium  pb-3 lg:text-center text-secondray_color">
            Influencer Management
          </h3>
          <p className=" text-base lg:text-lg lg:text-center leading-7 font-normal text-gray-900  text-text_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="max-w-[700px] mb-14 border-l-4 border-l-primary_color pl-6 lg:py-5 lg:pr-4 lg:pl-16 ">
          <h3 className="text-xl lg:text-2xl font-medium  pb-3 lg:text-center text-secondray_color">
            Influencer Management
          </h3>
          <p className=" text-base lg:text-lg lg:text-center leading-7 font-normal text-gray-900  text-text_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="max-w-[700px] mb-14 border-l-4 border-l-primary_color pl-6 lg:py-5 lg:pr-4 lg:pl-16 ">
          <h3 className="text-xl lg:text-2xl font-medium  pb-3 lg:text-center text-secondray_color">
            Influencer Management
          </h3>
          <p className=" text-base lg:text-lg lg:text-center leading-7 font-normal text-gray-900  text-text_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Network