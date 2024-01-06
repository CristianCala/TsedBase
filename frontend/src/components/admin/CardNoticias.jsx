import React from "react";
import Images from "../../utils/images/images";
import { AvatarWithInfo } from "./AvatarWithInfo";
export const CardNoticias = ({
  img,
  title,
  text,
  avatar = { img: Images.representante, name: "Samuelgraterol" },
}) => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="">
        <img src={img} className="block w-[100%]" alt="" />
      </div>

      <div className="pt-5 ">
        <h4 className="font-extrabold text-lg mb-3">{title}</h4>

        <p>{text}</p>
      </div>
      <div className="mt-5">
        <AvatarWithInfo
          textColor="text-black"
          img={avatar.img}
          name={avatar.name}
          size={{ width: "35px", height: "35px" }}
        />
      </div>
    </div>
  );
};
