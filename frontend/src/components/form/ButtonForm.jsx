import React from "react";

export const ButtonForm = ({
  children,
  type = "button",
  id,
  className,
  handdleClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      id={id}
      className={`block p-2 px-4 rounded-full font-bold ${className} ${
        disabled && "opacity-75"
      }`}
      onClick={handdleClick}
      //   style={{ background: "#693CBA" }}
    >
      {children}
    </button>
  );
};
