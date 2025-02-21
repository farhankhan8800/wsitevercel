import React from "react";
import AnimateElement from "../atoms/AnimateElement";

const ProcessSolve = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div className=" relative">
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
      <div className="pt-5 ">
        <p className="text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni.
        </p>
        <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur.
        </p>
        <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur.
        </p>
        <p className=" text-xl leading-7 font-normal text-gray-900 pb-6 text-text_color">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default ProcessSolve;
