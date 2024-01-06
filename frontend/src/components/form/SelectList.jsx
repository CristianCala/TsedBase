import React from "react";

export const SelectList = ({
  label = null,
  labelClass,
  id,
  children,
  name,
  field = {},
  className,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`mb-2 block ${labelClass}`}>
          {label}
        </label>
      )}
      <select
        name={name}
        className={`text-black cursor-pointer rounded-lg w-[100%] h-[35px] p-0 px-3 ${className}`}
        id={id}
        {...field}
      >
        {children}
      </select>
    </>
  );
};
