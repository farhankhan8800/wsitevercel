import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import AnimateElement from "./atoms/AnimateElement";

const SubHero = ({ page_name, redirect_page, redirect_url }) => {
  return (
    <section className=" bg-[url('https://i.imgur.com/Gh32jIG.png')] bg-cover bg-center mb-10 lg:mb-40">
      <div className="max-w-8xl mx-auto p-4 lg:px-8 flex justify-center items-center h-[40vh]">
        <div>
          <AnimateElement
            animatecontent={
              <h3 className="text-4xl lg:text-5xl mb-5 text-secondray_color font-bold text-center capitalize" data-aos="fade-up">
                {page_name}
              </h3>
            }
          />

          <div className="flex justify-center gap-2 items-center text-blue-500 text-base capitalize font-normal">
            <Link
              href={redirect_url}
              className="border-b-[1px] border-secondray_color hover:border-b-transparent "
            >
              {redirect_page}
            </Link>
            <FaAngleRight />
            <span>{page_name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
