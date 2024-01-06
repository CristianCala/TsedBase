import React from "react";

export const RadioCircleCustom = ({
  children,
  id,
  type = "radio",
  name,
  value,
  field,
  valueCheched,
  handdleChange,
  className = "w-[35px] h-[35px] rounded-full",
}) => {
  const checked = valueCheched == value ? { defaultChecked: true } : {};
  // console.log(valueCheched);
  return (
    <label
      htmlFor={id}
      className={`label_check bg-gray-300 cursor-pointer font-bold flex justify-center items-center ${className}`}
    >
      {children}

      <input
        {...checked}
        value={value}
        type={type}
        name={name}
        className="check_input_custom hidden"
        id={id}
        onChange={handdleChange}
      />
    </label>
  );
};
