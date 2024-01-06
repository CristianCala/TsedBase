import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { AlertIcon } from "../../../components/alertsMessages/AlertIcon";
import { ButtonForm } from "../../../components/form/ButtonForm";
import { PublicSteps } from "../../../components/layout/PublicSteps";
import Images from "../../../utils/images/images";

export const RegisterSuccess = () => {
  return (
    <PublicSteps bgImg={Images.grupo_beisbol}>
      {/* <div className="w-full flex justify-center items-center ">
        <div className="font-medium w-full max-w-[500px] p-10  bg-[#222332] text-white text-center">
          <div className="mb-5">
            <FontAwesomeIcon icon={faCircleCheck} className="text-5xl" />
          </div>

          <div className="text-xl">
            <h1 className="mb-10 ">Tu registro ha sido realizado con éxito.</h1>
            <p className="mb-10">
              Sigue el enlace enviado por correo electrónico para validar tu
              inicio de sesión
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <Link
                className="text-white  bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm  py-2.5 text-center block"
                to="/login"
              >
                Aceptar
              </Link>
            </div>
            <div className="">
              <Link
                className="text-white  bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm  py-2.5 text-center block"
                to="/login"
              >
                Cerrar
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <AlertIcon
        icon={<FontAwesomeIcon icon={faCircleCheck} className="text-5xl" />}
        buttons={
          [
            // { text: "Aceptar", link: "/login" },
            // { text: "Cerrar", link: "/login" },
            // { text: "Cerrar", link: "/login" },
          ]
        }
      >
        <h1 className="mb-10 ">Tu registro ha sido realizado con éxito.</h1>
        <p className="mb-10">
          Sigue el enlace enviado por correo electrónico para validar tu inicio
          de sesión
        </p>

        <div className="grid grid-cols-2 gap-[10px]">
          <div className="">
            <Link to="/login">
              <ButtonForm
                type="submit"
                className="bg-[#693CBA] text-white w-full"
              >
                Aceptar
              </ButtonForm>
            </Link>
          </div>
          <div className="">
            <Link to="/login">
              <ButtonForm type="submit" className="bg-white text-black w-full">
                Cerrar
              </ButtonForm>
            </Link>
          </div>
        </div>
      </AlertIcon>
    </PublicSteps>
  );
};
