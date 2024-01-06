import React from "react";

export const AvatarWithInfo = ({
  name,
  img,
  info,
  textColor = "text-white",
  size = { height: "50px", width: "50px" },
}) => {
  return (
    <div className="flex">
      <div className="">
        <div
          className={`bg-gray-200 rounded-full overflow-hidden`}
          style={{ ...size }}
        >
          <img src={img} alt="" />
        </div>
      </div>

      {name || info ? (
        <div className={`pl-4 ${textColor} flex items-center`}>
          <div className="">
            {name && <h5 className="font-bold text-base">{name}</h5>}

            {info && <p className="text-xs text-gray-300">{info}</p>}
          </div>
        </div>
      ) : null}
    </div>
  );
};
