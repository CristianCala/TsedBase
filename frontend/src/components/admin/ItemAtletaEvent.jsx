import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export const ItemAtletaEvent = ({
  handdleDelete = null,
  img,
  ci,
  name,
  passport_num,
  passport_ven,
  user_category,
  activitie_sport,
  invalid = false,
  disabledCi = false,
}) => {
  return (
    <div
      className={
        "md:flex items-center w-full  p-3 rounded-lg " +
        (invalid ? "bg-red-200" : "bg-gray-200")
      }
    >
      {!disabledCi && (
        <div className="p-3 md:w-[25%]- flex-auto">
          <label htmlFor="" className="font-bold mb-2 block">
            Numero de cedula
          </label>
          <p className="bg-white py-2 px-3">{ci}</p>
        </div>
      )}

      <div
        className={`${
          disabledCi ? "md:w-1/3-" : "md:w-[25%]-"
        }  p-3 px-7 flex justify-center`}
      >
        <div className="">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden ">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div
        className={`${disabledCi ? "md:w-1/3-" : "md:w-[25%]-"} p-3 flex-auto`}
      >
        <div className="mb-1">
          <label htmlFor="" className="font-bold mb-1 block">
            Nombre y Apellido
          </label>
          <p className="">{name}</p>
        </div>
        <div className="mb-1">
          <label htmlFor="" className="font-bold mb-1 block">
            N. Pasaporte
          </label>
          <p className="">{passport_num}</p>
        </div>
        <div className="">
          <label htmlFor="" className="font-bold mb-1 block">
            Ven. pasaporte
          </label>
          <p className="">{passport_ven}</p>
        </div>
      </div>

      <div
        className={`${disabledCi ? "md:w-1/3-" : "md:w-[25%]-"} p-3 flex-auto`}
      >
        <div className="mb-1">
          <label htmlFor="" className="font-bold mb-1 block">
            Categoria de Usuario
          </label>
          <p className="">{user_category}</p>
        </div>
        <div className="">
          <label htmlFor="" className="font-bold mb-1 block">
            Tipo de Actividad deportiva
          </label>
          <p className="">{activitie_sport}</p>
        </div>
        {disabledCi && (
          <div className="">
            <label htmlFor="" className="font-bold mb-1 block">
              Numero de cedula
            </label>
            <p className="">{ci}</p>
          </div>
        )}
      </div>

      {handdleDelete && (
        <div className="p-3">
          <ButtonForm
            handdleClick={handdleDelete}
            className="bg-gray-300 text-gray-500 "
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </ButtonForm>
        </div>
      )}
    </div>
  );
};
