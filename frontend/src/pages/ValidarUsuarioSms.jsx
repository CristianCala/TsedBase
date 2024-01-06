import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { AlertIcon } from "../components/alertsMessages/AlertIcon";
import { ButtonForm } from "../components/form/ButtonForm";
import { PublicSteps } from "../components/layout/PublicSteps";
import Images from "../utils/images/images";

const ValidarUsuarioSms = () => {
  return (
    <PublicSteps bgImg={Images.cancha_tenis_azul}>
      <AlertIcon>
        <h1 className="mb-10 text-3xl">¡Valida tu usuario!</h1>
        <p className="mb-10">
          Introducir Los 6 Dígitos Recibidos Por Mensaje De Texto Al Número
          412*****85
        </p>

        <input
          type="number"
          name="num"
          className="tracking-[20px] min-h-[35px] transition-all block p-2 py-1.5 w-full   
                                        text-[#9b9b9b] rounded-lg  shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold text-center bg-[#222332] text-2xl"
          placeholder="******"
          max="6"
          autoComplete="id"
        />

        <div className=" w-full font-bold text-center leading-loose max-w-[500px]">
          <div className="pt-8 grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* <div className=""> */}
            <ButtonForm className="bg-[#693CBA] text-white rounded-full">
              Validar
            </ButtonForm>
            <Link to="/">
              <ButtonForm className="bg-white rounded-full w-full text-black">
                Cerrar
              </ButtonForm>
            </Link>
          </div>
        </div>
      </AlertIcon>
    </PublicSteps>
  );
};

export default ValidarUsuarioSms;
