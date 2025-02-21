import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import AnimateElement from '../atoms/AnimateElement'
import InfoCard from '../InfoCard'
import Image from 'next/image'

const Growth = () => {
  return (
    <section className="lg:flex overflow-hidden bg-[#0a89ff24] rounded-md py-10 px-5">
    <div className="lg:w-1/2 items-center justify-center ">
      <div className="relative max-w-[520px]">
        <AnimateElement
          animatecontent={
            <div className="absolute -right-1 lg:-right-28 top-36" data-aos="fade-left">
              <InfoCard text="Satisfied Users" number="99.9%" />
            </div>
          }
        />

        <div className="absolute top-4 left-6">
          <Image
            src="https://i.imgur.com/ncmy46Q.png"
            height={100}
            width={100}
            className="w-[80px]  h-[80px]"
            alt="hero image"
            sizes="100vw"
          />
        </div>

        <div className="h-[57vh] rounded-t-full border-4 border-primary_color bg-[url('https://i.imgur.com/UJiB3Xb.jpeg')] bg-cover bg-center lg:ml-20"></div>
        <AnimateElement
          animatecontent={
            <div
              className="absolute -left-30 bottom-8"
              data-aos="fade-right"
            >
              <InfoCard
                text="Satisfied Users"
                number="99.9%"
                icon="heart"
              />
            </div>
          }
        />
      </div>
    </div>
    <div className="lg:w-1/2 pt-5 ">
      <div className="relative mb-8">
        <p className="text-base uppercase text-primary_color mb-3 font-medium">
        Growth Your Business
        </p>
        <AnimateElement
          animatecontent={
            <h2
              className="text-3xl lg:text-5xl lg:leading-normal tracking-tight text-secondray_color font-semibold"
              data-aos="fade-up"
            >
              We are the
              <span className="relative mx-3 text-primary_color">
                Pioneer
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
              of the influencer marketing
            </h2>
          }
        />
      </div>
      <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni.
      </p>
      <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
        quo voluptas nulla pariatur.
      </p>
      <div className="relative h-16 mt-10 w-52">
        <Link
          href="/contact-us"
          className="inline-flex gap-3 text-base items-center bg-[var(--primary-color)] text-[var(--light-color)] py-3.5 px-8 uppercase font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
        >
          Get Started <FaArrowRightLong />
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Growth