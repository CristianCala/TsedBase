import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const InputIcon = ({
  label = null,
  id,
  placeholder,
  children,
  labelClass,
  type = "text",
  name,
  field,
  handdleChange,
  required = true,
}) => {
  const onChange = handdleChange ? { onChange: handdleChange } : {};

  return (
    <>
      {label && (
        <label htmlFor={id} className={`mb-2 block ${labelClass}`}>
          {label}
        </label>
      )}
      <div className="bg-white rounded-lg flex overflow-hidden text-gray-400">
        {children && (
          <div className="w-[35px] h-[35px] flex justify-center items-center">
            {children}
          </div>
        )}

        <div className="basis-full bg-slate-400 ">
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            className="h-[35px] block w-[100%] border-0 text-black"
            name={name}
            {...field}
            {...onChange}
          />
        </div>
      </div>
    </>
  );
};
