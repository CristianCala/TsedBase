import React from "react";
import Images from "../../utils/images/images";

export const PublicSteps = ({ children, bgImg }) => {
  return (
    <div className="w-full overflow-hidden -mb-7">
      <div
        className="font-sans bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg || Images.background1})` }}
      >
        <div className="flex w-full min-h-screen bg-gray-900 bg-opacity-50 p-3">
          {children}
        </div>
      </div>
    </div>
  );
};
