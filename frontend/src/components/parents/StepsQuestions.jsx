import React from "react";
import Images from "../../utils/images/images";

export const StepsQuestions = ({ children, bgImg, className }) => {
  return (
    <div className="w-full overflow-hidden -mb-7">
      <div
        className="font-sans bg-center- bg-cover bg-no-repeat bg-heroPasos"
        style={{ backgroundImage: `url(${bgImg || Images.background1})` }}
      >
        <div
          className={
            "flex justify-end w-full min-h-screen bg-gray-900 bg-opacity-50 p-3 " +
            className
          }
        >
          <div
            id="register-form"
            className="w-[100%] md:w-5/6 lg:w-4/6 xl:w-1/2 h-[100%]-   rounded-lg bg-[#222332]/80 mx-8- p-3 py-10"
          >
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
