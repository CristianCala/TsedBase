import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AvatarWithInfo } from "../components/admin/AvatarWithInfo";
import { GraySection } from "../components/admin/parent/GraySection";
import { Admin } from "../components/layout/Admin";
import { PaginationBtn } from "../components/PaginationBtn";
import { GoBack } from "../components/parents/GoBack";
import { createArrayRand } from "../utils/helpers/selectsData";
import Images from "../utils/images/images";

export const Notifications = () => {
  const arr_notifications = createArrayRand(5);
  const dataTable = [...arr_notifications];

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] font-extrabold mb-10 flex gap-3">
          <div className="">
            <GoBack className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#693CBA] text-white">
              <FontAwesomeIcon icon={faAngleLeft} />
            </GoBack>
          </div>
          <h2 className=" lg:text-3xl text-2xl">Notificaciones</h2>
          {/* <p>Asignación de atletas</p> */}
        </div>

        {/* * notificaciones */}
        <div className="flex flex-col gap-2">
          {arr_notifications.map((not) => (
            <div className="flex justify-between bg-gray-200 p-4 rounded-lg items-center">
              <div className="flex gap-3 items-center ">
                <div className="">
                  <AvatarWithInfo img={Images.representante} />
                </div>
                <div className="">
                  <h4 className="font-extrabold text-gray-500 text-sm mb-1">
                    Samuel Graterol
                  </h4>
                  <p className="text-gray-400 text-xs mb-0">
                    Agregó un nuevo atleta "Armando graterol"
                  </p>
                  <a href="" className="text-[#693CBA] text-xs font-semibold">
                    Ver cambios
                  </a>
                </div>
              </div>

              <div className="text-gray-700 font-extrabold text-xs md:text-base">
                <p className="">10:00 am</p>
                <p className="">10/11/2023</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[15px] mt-10 flex-wrap">
          {dataTable.map((pag, i) => (
            <PaginationBtn key={i} text={pag} active={i == 0} />
          ))}
        </div>
      </GraySection>
    </Admin>
  );
};
