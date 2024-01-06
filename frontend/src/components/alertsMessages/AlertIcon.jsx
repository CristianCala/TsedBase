import React from 'react';
import { Link } from 'react-router-dom';

export const AlertIcon = ({ icon, children, buttons = [] }) => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="font-medium w-full max-w-[500px] p-10  bg-[#222332] text-white text-center">
        <div className="mb-5">
          {/* <FontAwesomeIcon icon={faCircleCheck} className="text-5xl" /> */}
          {icon && icon}
        </div>

        <div className="text-xl">{children}</div>

        <div className={`grid gap-5 grid-cols-2 `}>
          {buttons.map((btn) => (
            <div className="">
              <Link
                className="text-white  bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                      hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm  py-2.5 text-center block"
                to={btn.link}
              >
                {btn.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
