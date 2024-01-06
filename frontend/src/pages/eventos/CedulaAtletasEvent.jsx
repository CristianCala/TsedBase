import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik } from "formik";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { InputIcon } from "../../components/form/InputIcon";
import { Admin } from "../../components/layout/Admin";
import { createArrayRand } from "../../utils/helpers/selectsData";
export const CedulaAtletasEvent = ({ countCi, handdleStep, stepActual }) => {
  //   const query = new URLSearchParams(useLocation().search);
  const arrCountCi = createArrayRand(countCi);

  const handdleSubmit = (e) => {
    e.preventDefault();
    handdleStep(stepActual + 1);
  };
  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl ">Evento</h2>
          <p className=" ">Crear nuevo evento</p>
        </div>

        <form action="" onSubmit={handdleSubmit}>
          <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
            {arrCountCi.map((num, i) => (
              <div className="w-full md:w-1/2 p-3">
                <InputIcon
                  type="number"
                  labelClass="font-bold"
                  label={"Cedula numero " + (i + 1)}
                  id={"count_atl_" + (i + 1)}
                  placeholder={"Cedula numero " + (i + 1)}
                >
                  <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
                </InputIcon>
              </div>
            ))}

            <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
              <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                <ButtonForm
                  type="submit"
                  className="bg-[#693CBA] text-white  w-[100%]"
                >
                  Continuar
                </ButtonForm>
              </div>
              <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                <ButtonForm className="bg-[#222332] text-white  w-[100%]">
                  Cancelar
                </ButtonForm>
              </div>
            </div>
          </div>
        </form>
      </GraySection>
    </Admin>
  );
};
