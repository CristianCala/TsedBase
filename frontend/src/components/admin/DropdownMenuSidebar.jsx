import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const DropdownMenuSidebar = ({
  children,
  className,
  text,
  show = false,
}) => {
  const [active, setActive] = useState(show);

  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className={
          "flex justify-between items-center cursor-pointer px-10 py-4 text-white hover:bg-[#693CBA] transition-all " +
          (active && " bg-[#693CBA] ") +
          className
        }
      >
        <span>{text}</span>

        <FontAwesomeIcon
          icon={faAngleDown}
          className={"transition-all " + (active && " rotate-180 ")}
        />
      </div>
      {active && <div className="bg-[#3E3351]">{children}</div>}
    </div>
  );
};
