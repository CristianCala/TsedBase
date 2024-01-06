import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { SidebarAdmin } from "../admin/SidebarAdmin";
import Images from "../../utils/images/images";

export const Admin = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex">
      <div className="">
        <SidebarAdmin menuActive={menu} setMenu={setMenu} />
      </div>
      <div
        className="h-screen overflow-y-auto w-[100%] lg:w-[calc(100%-300px)] lg:p-10 p-5 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Images.cancha_tenis_azul})` }}
      >
        <div className="flex justify-end lg:pb-10 pb-5  lg:hidden">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className=" w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
