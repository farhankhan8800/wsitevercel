import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const MainButton = ({title, title_fontsize, icon_fontsize='4xl'}) => {
  return (
    <button className="relative inline-flex items-center gap-1 px-8 py-3 pl-4 pr-14 bg-[var(--primary-color)] rounded-full border border-[var(--fontColor)] group">
      <span className={`text-white group-hover:text-[var(--fontColor)] z-20 text-${title_fontsize}`} >{title}</span>
     
    </button>
  );
};

export default MainButton;
