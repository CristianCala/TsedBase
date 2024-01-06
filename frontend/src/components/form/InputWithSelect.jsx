import React from "react";
import { useState } from "react";

export const InputWithSelect = ({
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
  dataDrop,
}) => {
  const onChange = handdleChange ? { onChange: handdleChange } : {};
  const [dropActive, setDropActive] = useState(false);
  const [selectDrop, setSelectDrop] = useState(
    dataDrop.filter((val) => val.selected)[0] || null
  );

  function handdleSlelect(value) {
    setSelectDrop(value);
    setDropActive(false);
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className={`mb-2 block ${labelClass}`}>
          {label}
        </label>
      )}
      <div className=" rounded-lg flex overflow-hidden- text-gray-400">
        <div className=" flex justify-center items-center">
          {/* <select className="w-[45px] h-[35px] text-center no-arrow">
            <option value="V" selected>
              V
            </option>
            <option value="E" selected>
              E
            </option>
            <option value="J" selected>
              J
            </option>
            <option value="G" selected>
              G
            </option>
          </select> */}

          <div className="relative">
            <button
              onClick={() => setDropActive(!dropActive)}
              id="dropdownDefaultButton"
              className="h-[35px] w-[35px] flex justify-center items-center text-black bg-white"
              type="button"
            >
              {selectDrop.label || ""}
            </button>

            <div
              id="dropdown"
              className={
                "z-10 absolute left-0 bg-white divide-y divide-gray-100 rounded shadow " +
                (!dropActive && "hidden")
              }
            >
              <ul className="py-1 text-sm text-gray-700 ">
                {dataDrop.map((val, i) => {
                  return (
                    <li key={i}>
                      <a
                        onClick={() => handdleSlelect(val)}
                        href="#"
                        className={
                          "block px-4 py-2 hover:bg-gray-100 " +
                          (selectDrop?.value == val.value ? "bg-gray-100" : "")
                        }
                      >
                        {val.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="basis-full bg-slate-400-">
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            className="h-[35px] block w-[100%] border-0 text-black rounded-tr-lg rounded-br-lg"
            name={name}
            {...field}
            {...onChange}
          />
        </div>
      </div>
    </>
  );
};
