import React from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const InfoCard = ({ icon = "user", text, number }) => {
  return (
    <div className="flex px-5 py-4 shadow-2xl rounded-lg justify-between items-center bg-light_color gap-5">
      <div className="h-14 w-14 rounded-full bg-primary_color flex justify-center items-center">
        {icon == "user" ? (
          <FaUser className="text-light_color" fontSize={26} />
        ) : (
          <FaHeart className="text-light_color" fontSize={26} />
        )}
      </div>
      <div>
        <h3 className="text-primary_color text-xl font-semibold ">{number}</h3>
        <p className="text-text_color text-lg font-medium">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
