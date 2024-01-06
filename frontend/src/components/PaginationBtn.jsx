import React from "react";

export const PaginationBtn = ({ text, active = false }) => {
  return (
    <div
      href="#"
      className={`label_check w-[35px] h-[35px] cursor-pointer rounded-full font-bold flex justify-center items-center ${
        active ? "bg-[#693CBA] text-white" : "bg-gray-300"
      }`}
    >
      {text}
    </div>
  );
};
