import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const ReporteBtn = ({ text, iconImg }) => {
  return (
    <div className="rounded-xl bg-[#222332] p-5 text-white flex items-center">
      <div className="pr-5">
        <div className="w-[40px]">
          {/* <FontAwesomeIcon icon={faUser} /> */}
          {iconImg && <img src={iconImg} className="w-[100%]" alt="" />}
        </div>
      </div>
      <div className="">{text}</div>
    </div>
  );
};
