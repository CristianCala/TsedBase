import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Alert = ({
  icon,
  className,
  children,
  show = true,
  handdleShow,
  handdleHide = null,
}) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("modal_alert_component")) {
          handdleShow(false);
          if (handdleHide) {
            handdleHide();
          }
        }
      }}
      className={`${
        show ? "flex" : "hidden"
      } modal_alert_component fixed top-0 left-0 bottom-0 right-0  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-black bg-opacity-50  items-center justify-center transition-all`}
    >
      <div className="modal-dialog relative w-full  max-w-[500px] md:h-auto ">
        <div
          className={`relative rounded-2xl shadow p-10 text-center ${className}`}
        >
          {icon && (
            <div className="text-6xl mb-5">
              <FontAwesomeIcon icon={icon} />
            </div>
          )}

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
