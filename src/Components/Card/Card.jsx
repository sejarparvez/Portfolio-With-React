import React from "react";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div
      className=" absolute flex flex-col gap-1 items-center text-center bg-gray-600
    border-[7px] border-solid border-[#32daff] rounded-3xl pb-6 px-4 h-auto w-[13rem]"
    >
      <img className=" scale-[0.6] -mt-4" src={emoji} alt="emoji" />
      <span className=" font-bold text-lg -mt-4 mb-2 text-white">{heading}</span>
      <span className="text-white">{detail}</span>
    </div>
  );
};

export default Card;
