import React from "react";
import AnimateElement from "../atoms/AnimateElement";
import HomeClient from "../HomeClient";

const Testimonial = () => {
  return (
    <section className="relative my-6 mt-20 lg:mt-44 text-[var(--fontColor)]">
      <div className="lg:grid grid-cols-5 gap-8 ">
        <div className="col-span-2 ">
          <div>
            <p className="text-base uppercase text-primary_color  font-medium mb-2">
              Testimonials
            </p>
            <div className=" relative">
              <AnimateElement
                animatecontent={
                  <h2
                    className="text-3xl lg:text-5xl lg:leading-normal tracking-tight text-secondray_color font-semibold"
                    data-aos="fade-up"
                  >
                    Some talk of
                    <span className="relative mx-3 text-primary_color">
                      honorable
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
                    clients
                  </h2>
                }
              />
            </div>
            <div className="flex justify-center pt-4">
              <p className=" text-xl leading-7 font-normal text-gray-900 pb-6  max-w-[700px] text-text_color">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <HomeClient />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
