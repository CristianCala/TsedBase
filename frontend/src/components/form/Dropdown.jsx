import {
  faAngleDown,
  faAngleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children, useState } from "react";
import { ButtonForm } from "./ButtonForm";

export const Dropdown = ({
  children,
  className,
  containerClassName,
  textBtn = "Descargar",
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative block text-left ${containerClassName}`}>
      <div>
        <ButtonForm
          handdleClick={() => {
            setShow(!show);
          }}
          type="submit"
          className={`${className}`}
        >
          {textBtn}

          <FontAwesomeIcon icon={faAngleDown} className="ml-3" />
        </ButtonForm>
      </div>

      <div
        className={`transition ease-out duration-100 absolute right-0 z-10 mt-2 min-w-[100%] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          !show && "transform opacity-0 scale-y-0"
        }`}
      >
        <div className="py-1 min-w-[200px]" role="none">
          {children}
          {/* <a
            href="#"
            className="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 transition-all flex items-center"
            id="menu-item-0"
          >
            <div className="w-[30px] h-[30px] rounded-full bg-gray-200 flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faUser} className="" />
            </div>
            Account settings
          </a> */}
        </div>
      </div>
    </div>
  );
};
