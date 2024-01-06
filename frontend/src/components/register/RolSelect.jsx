import React from "react";

export const RolSelect = ({
  handdleChange,
  value,
  img,
  text,
  inputId,
  name,
  className,
}) => {
  return (
    <label
      htmlFor={inputId}
      className={`select_option_rol cursor-pointer sm:h-1/3- flex justify-start items-center h-1/4- w-full bg-[#2D3450]/75 hover:bg-[#693CBA] rounded-md text-white text-xs sm:text-sm font-normal p-3 md:p-5 gap-3 md:gap-5 ${className}`}
    >
      <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#313856]">
        <img className="object-cover w-[100%] h-[100%]" src={img} alt={text} />
      </div>
      <input
        onChange={handdleChange}
        name={name}
        value={value}
        id={inputId}
        type="radio"
        className="select_option_rol_input hidden"
      />

      <p>{text}</p>
    </label>
  );
};
