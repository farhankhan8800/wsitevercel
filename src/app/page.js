import AnimateElement from "@/components/atoms/AnimateElement";
import InfoCard from "@/components/InfoCard";
import Growth from "@/components/organisms/Growth";
import HomeInfluncer from "@/components/organisms/HomeInfluncer";
import Network from "@/components/organisms/Network";
import Service from "@/components/organisms/Service";
import Testimonial from "@/components/organisms/Testimonial";
import TouchIn from "@/components/organisms/TouchIn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function page() {
  return (
    <main className="max-w-8xl mx-auto p-4 lg:px-8">
      <section className="flex flex-col lg:flex-row gap-10 pt-10 lg:mt-40">
        <div className="lg:w-1/2">
          <p className="text-base mb-5 text-center lg:text-left uppercase text-primary_color font-medium">
            The Best Influncer agency
          </p>
          <h1 className="text-3xl lg:text-6xl leading-snug lg:leading-normal lg:tracking-tight text-secondray_color font-bold">
            The
            <span className="relative mx-3 text-primary_color">
              Leading
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
            Agency for Digital Influencer Marketing
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-900 pb-8 text-text_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          <div className="relative h-16 w-full lg:w-52">
            <Link
              href="/contact-us"
              className="flex gap-3 text-base justify-center items-center bg-[var(--primary-color)] text-[var(--light-color)] py-3.5 px-8 uppercase font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
            >
              Learn More <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center relative h-[80vh] max-lg:overflow-hidden">
          <div className="relative">
            <AnimateElement
              animatecontent={
                <div
                  className="h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450] md:w-[450px] lg:h-[470] lg:w-[470px] m-auto bg-primary_color rounded-full "
                  data-aos="zoom-in"
                ></div>
              }
            />

            <AnimateElement
              animatecontent={
                <div className="absolute -right-1 lg:-right-32 top-28 z-10" data-aos="fade-left">
                  <InfoCard text="Top Rated Job" number="100%" />
                </div>
              }
            />

            <AnimateElement
              animatecontent={
                <div className="absolute -top-10 left-1 lg:-left-3" data-aos="zoom-in">
                  <Image
                    src="https://i.imgur.com/ncmy46Q.png"
                    height={100}
                    width={100}
                    className="w-[70px]  h-[70px] lg:w-[100px]  lg:h-[100px]"
                    alt="hero image"
                    sizes="100vw"
                  />
                </div>
              }
            />

            <Image
              src="https://i.imgur.com/mMbgD5z.png"
              height={100}
              width={100}
              className="w-full -top-[100px] lg:left-16 h-[75vh] lg:h-[68vh] max-h-[560px] lg:max-h-[700px] absolute"
              alt="hero image"
              sizes="100vw"
            />

            <AnimateElement
              animatecontent={
                <div
                  className="absolute bottom-10 -right-0 sm:-right-10 lg:-right-20"
                  data-aos="zoom-in"
                >
                  <Image
                    src="https://i.imgur.com/ncmy46Q.png"
                    height={100}
                    width={100}
                    className="w-[40px]  h-[40px] lg:w-[50px]  lg:h-[50px]"
                    alt="hero image"
                    sizes="100vw"
                  />
                </div>
              }
            />

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
      </section>

      <section className="lg:mt-14 p-6 lg:p-16 bg-[#F9FBFE]">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              className="w-40 h-auto"
              src="https://www.opa.marketing/static/8c51df2ef9f40a2297f952f34eca6085/960e3/client1_bn5uq3.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              className="w-40 h-auto"
              src="https://www.opa.marketing/static/a26fe98124abf18da9d5e560e03eeeeb/960e3/client2_vrszgk.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              className="w-40 h-auto"
              src="https://www.opa.marketing/static/2ef015db1f7b5ed73ac52adc0745ac8e/960e3/client3_vcynvz.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              className="w-40 h-auto"
              src="https://www.opa.marketing/static/ac9d7f2f34d0a8ccd65dac453d4e5aa9/960e3/client4_uxtfqa.webp"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="relative my-6 mt-28 text-[var(--fontColor)]">
        <section className="lg:flex ">
          <div className="lg:w-1/2 relative">
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

            <div className="flex justify-center items-center pt-20 pr-8 max-lg:hidden">
              <Image
                width={100}
                height={100}
                sizes="100vw"
                className="w-30 h-auto"
                src="https://i.imgur.com/ncmy46Q.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 pt-5 ">
            <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni.
            </p>
            <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur.
            </p>
            <div className="relative h-16 w-52 top-10">
              <Link
                href="/contact-us"
                className="inline-flex gap-3 text-base items-center hover:bg-[var(--primary-color)] text-primary_color hover:text-[var(--light-color)] py-3.5 px-9 uppercase font-normal rounded transition-all duration-300 ease-in-out border-primary_color border-[3px]  hover:shadow-xl hover:translate-y-[-5px] "
              >
                More About us
              </Link>
            </div>

            <div className="flex justify-center items-center pt-20 pr-56 lg:hidden">
              <Image
                width={100}
                height={100}
                sizes="100vw"
                className="w-30 h-auto"
                src="https://i.imgur.com/ncmy46Q.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>

      <section className="mt-20 lg:mt-40">
        <Service />
      </section>
      <Growth />
      <HomeInfluncer/>
      <Network />
      <Testimonial />
      <TouchIn />
    </main>
  );
}
