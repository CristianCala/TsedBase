import React from "react";

export const GraySection = ({ children, className, bg = "bg-[#F3F3F3]" }) => {
  return (
    <div className={`rounded-3xl lg:p-10 p-5 ${className} ${bg}`}>
      {children}
    </div>
  );
};
