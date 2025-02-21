import React from 'react'
import AnimateElement from '../atoms/AnimateElement'
import Image from 'next/image'
import Link from 'next/link'

const TouchIn = () => {
  return (
    <section className="flex flex-col-reverse justify-center lg:justify-between lg:flex-row gap-10 py-8 lg:px-14 lg:pt-20 lg:mt-48 bg-[var(--light-bg-color)]">
    <div className="lg:w-1/2 ">
      <p className="text-base text-center lg:text-left mb-5 uppercase text-primary_color font-medium">
        Contact us
      </p>
      <AnimateElement
        animatecontent={
          <h2
            className="text-3xl lg:text-5xl lg:leading-normal text-center lg:text-left tracking-tight text-secondray_color font-semibold"
            data-aos="fade-up"
          >
            Ready to get started?
          </h2>
        }
      />

      <p className="mt-6 text-lg leading-7 text-center lg:text-left text-gray-900 pb-8 text-text_color">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur.
      </p>

      <div className="relative h-16 lg:w-52">
        <Link
          href="/contact-us"
          className="inline-flex w-full justify-center gap-3 text-base items-center bg-[var(--primary-color)] text-[var(--light-color)] py-3.5 px-8 uppercase font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
        >
          Get in touch
        </Link>
      </div>
    </div>
    <div className="lg:w-1/2 flex justify-center items-center relative ">
      <div className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[380px] md:w-[410px] lg:h-[410px] lg:w-[380px] bg-[#dedeff] m-auto rounded-full relative">
        <div className="absolute -top-10 -right-3">
          <Image
            src="https://i.imgur.com/ncmy46Q.png"
            height={100}
            width={100}
            className="w-[70px]  h-[70px] lg:w-[100px]  lg:h-[100px]"
            alt="hero image"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-44 -left-16">
          <Image
            src="https://i.imgur.com/ncmy46Q.png"
            height={100}
            width={100}
            className="w-[50px]  h-[50px] lg:w-[70px]  lg:h-[70px]"
            alt="hero image"
            sizes="100vw"
          />
        </div>
        <Image
          src="https://i.imgur.com/ULFlT7q.png"
          height={300}
          width={300}
          className="w-full -left-8 absolute"
          alt="hero image"
          sizes="100vw"
        />
        <div className="absolute bottom-10 -right-10">
          <Image
            src="https://i.imgur.com/ncmy46Q.png"
            height={100}
            width={100}
            className="w-[30px]  h-[30px] lg:w-[40px]  lg:h-[40px]"
            alt="hero image"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default TouchIn